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
                <ul class="flex pl-0 list-none rounded my-3">
                    <li class="relative block py-3 px-2 md:px-3 leading-tight opacity-100 border border-gray-300 text-green-500 border-r-0 ml-0 rounded-l hover:bg-gray-200">
                        <a class="page-link lg:text-2xl text-xl" href="#">이전</a>
                    </li>
                    <li class="relative block py-3 px-2 md:px-3 leading-tight opacity-100 border border-gray-300 text-green-500 border-r-0 hover:bg-gray-200">
                        <a class="page-link lg:text-2xl text-xl" href="#">1</a>
                    </li>
                    <li class="relative block py-3 px-2 md:px-3 leading-tight opacity-100 border border-gray-300 text-green-500 border-r-0 hover:bg-gray-200">
                        <a class="page-link lg:text-2xl text-xl" href="#">2</a>
                    </li>
                    <li class="relative block py-3 px-2 md:px-3 leading-tight opacity-100 border border-gray-300 text-green-500 border-r-0 hover:bg-gray-200">
                        <a class="page-link lg:text-2xl text-xl" href="#">3</a>
                    </li>
                    <li class="relative block py-3 px-2 md:px-3 leading-tight opacity-100 border border-gray-300 text-green-500 border-r-0 hover:bg-gray-200">
                        <a class="page-link lg:text-2xl text-2xl" href="#">4</a>
                    </li>
                    <li class="relative block py-3 px-2 md:px-3 leading-tight opacity-100 border border-gray-300 text-green-500 border-r-0 hover:bg-gray-200">
                        <a class="page-link lg:text-2xl text-xl" href="#">5</a>
                    </li>
                    <li class="relative block py-3 px-2 md:px-3 leading-tight opacity-100 border border-gray-300 text-green-500 rounded-r hover:bg-gray-200">
                        <a class="page-link lg:text-2xl text-xl" href="#">다음</a>
                    </li>
                </ul>
            </div>
            <div class="button-wrap">
                <button type="button" class="green-button write-button">글쓰기</button>
            </div>
        </main>
    </div>
</template>

<script>
import MDProfile from '../components/MDProfile.vue';
export default {
    components: {
        MDProfile
    }
};
</script>

<style scoped>
@import url('../assets/css/board.css');

main {
    position: relative;
}

.pagination-wrap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}

.button-wrap {
    position: absolute;
    right: 0.1rem;
    margin: 1.5rem 0;
}

.write-button {
    margin-top: 2rem;
}
</style>
