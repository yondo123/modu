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
import {mapState, mapMutations} from 'vuex';
export default {
    data() {
        return {
            complete: false,
            page: 1,
            boardList: []
        };
    },
    computed: {
        ...mapState('board', ['boardLessCount', 'boardLimitCount', 'totalList'])
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
                    this.$store
                        .dispatch('board/fetchBoardList', {
                            catId: 'CAT0001',
                            page: this.page,
                            count: this.boardLessCount
                        })
                        .then(response => {
                            if (response.data.success) {
                                if (response.data.items.length < response.data.totalCount) {
                                    this.boardList = this.boardList.concat(response.data.items);
                                    this.page++;
                                } else {
                                    this.endLoading();
                                    this.complete = true;
                                }
                            }
                            this.endLoading();
                        });
                }, 500);
            }
        },
        handleScroll(e) {
            const {scrollHeight, scrollTop, clientHeight} = e.target;
            const isBottom = scrollHeight === Math.ceil(scrollTop) + clientHeight;
            if (isBottom) {
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

::-webkit-scrollbar {
    display: none;
}

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
