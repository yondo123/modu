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
            <div class="pagination-wrap">
                <VPagenation v-model="currentPage" :pages="`${Math.ceil(this.limit / this.perPage)}`" :range-size="1" active-color="#FF7675" @update:modelValue="movePage" />
            </div>
            <div class="button-wrap">
                <button type="button" class="green-button write-button" v-on:click="this.$router.push({name: 'write', params: {boardId: $route.params.id}})">글쓰기</button>
            </div>
        </main>
    </div>
</template>

<script>
import VPagenation from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import MDProfile from '../components/MDProfile.vue';
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            limitPage: 0,
            currentPage: 1,
            perPage: 6
        };
    },
    computed: {
        ...mapGetters('board', {boardList: 'getBoardList', limit: 'getBoardLimit'})
    },
    components: {
        MDProfile,
        VPagenation
    },
    methods: {
        movePage(page) {
            return this.fetchBoardList(page);
        },
        fetchBoardList(page) {
            this.$store.dispatch('board/requestBoardList', {
                catId: this.$route.params.id,
                page: page
            });
        }
    },
    created() {
        this.fetchBoardList(1);
    }
};
</script>

<style scoped>
@import url('../assets/css/board.css');

main {
    position: relative;
}

.pagination-wrap {
    margin-top: 2.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}

.Pagination {
    flex-wrap: nowrap;
}

.button-wrap {
    position: absolute;
    right: 0.1rem;
    margin: 4rem 0;
}

.write-button {
    margin-top: 2rem;
}
</style>
