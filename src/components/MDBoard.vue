<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <MDProfile></MDProfile>
            <ul class="board-list">
                <li>
                    <a href="#">
                        <div class="profile">
                            <img class="board-icon" src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">제목</strong>
                            <p class="post-content">
                                길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수
                                길어질 경우 말줄임 필수 길어질 경우 말줄임 필수
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img class="board-icon" src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img class="board-icon" src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img class="board-icon" src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img class="board-icon" src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img class="board-icon" src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="pagination-wrap">
                <VPagenation v-model="currentPage" :pages="21" :range-size="1" active-color="#FF7675" @update:modelValue="movePage" />
            </div>
            <div class="button-wrap">
                <button type="button" class="green-button write-button">글쓰기</button>
            </div>
        </main>
    </div>
</template>

<script>
import VPagenation from '@hennge/vue3-pagination';
import '@hennge/vue3-pagination/dist/vue3-pagination.css';
import MDProfile from '../components/MDProfile.vue';
export default {
    data() {
        return {
            currentPage: 3
        };
    },
    components: {
        MDProfile,
        VPagenation
    },
    methods: {
        movePage(page) {
            alert(page);
        }
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
