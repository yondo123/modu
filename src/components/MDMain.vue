<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <MDProfile></MDProfile>
            <ul class="board-list">
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
            <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>
        </main>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import MDProfile from '../components/MDProfile.vue';
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            page: 1
        };
    },
    computed: {
        ...mapGetters('board', {boardList: 'getBoardList'})
    },
    components: {
        MDProfile,
        InfiniteLoading
    },
    methods: {
        infiniteHandler() {
            setTimeout(() => {
                this.$store.dispatch('board/requestBoardList', {
                    catId: 'CAT0001',
                    page: this.page
                });
            }, 1000);
        },
        handleScroll(el) {
            console.log(el);
        }
    }
};
</script>

<style scoped>
@import url('../assets/css/board.css');
</style>
