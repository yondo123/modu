<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main class="list" @scroll="handleScroll">
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <MDProfile></MDProfile>
            <ul class="board-list" @scroll="handleScroll">
                <li v-for="(item, index) in this.boardList" :key="index">
                    <a v-bind:href="$router.resolve({name: 'post', params: {postId: item.boardSeq}}).href">
                        <div class="profile">
                            <img v-bind:src="item.profileUrl" v-bind:art="item.writer" />
                        </div>
                        <div class="post">
                            <strong class="post-title">{{ item.title }}</strong>
                            <p class="post-content">{{ item.content }}</p>
                        </div>
                    </a>
                </li>
            </ul>
            <div v-if="this.$store.state.style.loadingStatus" class="loading-spinner">
                <PulseLoader :loading="loading" :color="color" :size="size"></PulseLoader>
            </div>
        </main>
    </div>
</template>

<script>
import MDProfile from '../components/MDProfile.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import {mapState, mapGetters, mapMutations} from 'vuex';
export default {
    data() {
        return {
            complete: false,
            page: 1
        };
    },
    computed: {
        ...mapState('board', ['boardLessCount', 'boardLimitCount']),
        ...mapGetters('board', {boardList: 'getBoardList'})
    },
    components: {
        MDProfile,
        PulseLoader
    },
    methods: {
        ...mapMutations('style', ['setSelectedMenu', 'startLoading', 'endLoading']),
        infiniteHandler() {
            if (this.complete) {
                return true;
            } else {
                this.startLoading();
                this.setSelectedMenu('CAT0001');
                setTimeout(() => {
                    this.$store.dispatch('board/requestBoardList', {
                        catId: 'CAT0001',
                        page: this.page,
                        count: this.boardLessCount
                    });
                    if (this.boardList.length > this.boardLimitCount || !this.boardList.length) {
                        this.endLoading();
                        this.complete = true;
                        return;
                    } else {
                        this.page++;
                    }
                    this.endLoading();
                }, 1000);
            }
        },
        handleScroll(e) {
            const {scrollHeight, scrollTop, clientHeight} = e.target;
            const isAtTheBottom = scrollHeight === scrollTop + clientHeight;
            // 일정 한도 밑으로 내려오면 함수 실행
            if (isAtTheBottom) {
                this.infiniteHandler();
            }
        }
    },
    created() {
        this.infiniteHandler();
    }
};
</script>

<style scoped>
@import url('../assets/css/board.css');
.list {
    height: calc(100vh - 70px);
    overflow: auto;
}

.loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}
.dimmed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    opacity: 8;
    z-index: 10;
}
</style>
