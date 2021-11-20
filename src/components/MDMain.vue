<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <MDProfile></MDProfile>
            <ul class="board-list">
                <li>
                    <a href="#">
                        <div class="profile">
                            <img src="../assets/logo.jpg" alt="user_id" />
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
                            <img src="../assets/logo.jpg" alt="user_id" />
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
                            <img src="../assets/logo.jpg" alt="user_id" />
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
                            <img src="../assets/logo.jpg" alt="user_id" />
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
                            <img src="../assets/logo.jpg" alt="user_id" />
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
                            <img src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                        </div>
                    </a>
                </li>
            </ul>
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
</style>
