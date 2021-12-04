<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <MDProfile></MDProfile>
            <ul class="board-list">
                <li v-for="(item, index) in this.boardList" :key="index">
                    <a href="#">
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
            <InfiniteLoading @infinite="infiniteHandler" />
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
        // infiniteHandler($state) {
        //     if (this.$store.state.board.boardList.length <= this.$store.state.board.boardLimitCount) {
        //         this.page += 1;
        //         this.$store.dispatch('board/requestBoardList', {
        //             catId: 'CAT0001',
        //             page: this.page
        //         });
        //         $state.loaded();
        //     } else {
        //         $state.complete();
        //     }
        // this.$store.dispatch('board/requestBoardList', {
        //     catId: 'CAT0001',
        //     page: this.page
        // });
        // axios
        //     .get(api, {
        //         params: {
        //             page: this.page
        //         }
        //     })
        //     .then(({data}) => {
        //         if (data.hits.length) {
        //             this.page += 1;
        //             this.list.push(...data.hits);
        //             $state.loaded();
        //         } else {
        //             $state.complete();
        //         }
        //     });
        // }
    },
    created() {
        this.$store.dispatch('board/requestBoardList', {
            catId: 'CAT0001',
            page: this.page
        });
    }
};
</script>

<style scoped>
@import url('../assets/css/board.css');
</style>
