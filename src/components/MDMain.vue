<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <div class="top-wrap unsign">
                <h2 class="board-title"><span>Recruitment for study.</span></h2>
                <button type="button" class="login-button">Github Login</button>
                <div class="user-info hide">
                    <span><strong>admin</strong>님, 안녕하세요.</span>
                    <button type="button" class="logout-button">Logout</button>
                </div>
            </div>
            <ul class="board-list">
                <li>
                    <a href="#">
                        <div class="profile">
                            <img src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">스터디 모집 제목</strong>
                            <p class="post-content">
                                길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수 길어질 경우 말줄임 필수
                                길어질 경우 말줄임 필수 길어질 경우 말줄임 필수
                            </p>
                            <div class="post-info">
                                <p class="post-writer sub-font">abcdefghijk</p>
                                <p class="post-date sub-font">2021. 10. 27</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">스터디 모집 제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                            <div class="post-info">
                                <p class="post-writer sub-font">admin</p>
                                <p class="post-date sub-font">2021. 10. 27</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">스터디 모집 제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                            <div class="post-info">
                                <p class="post-writer sub-font">admin</p>
                                <p class="post-date sub-font">2021. 10. 27</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">스터디 모집 제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                            <div class="post-info">
                                <p class="post-writer sub-font">admin</p>
                                <p class="post-date sub-font">2021. 10. 27</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">스터디 모집 제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                            <div class="post-info">
                                <p class="post-writer sub-font">admin</p>
                                <p class="post-date sub-font">2021. 10. 27</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="profile">
                            <img src="../assets/logo.jpg" alt="user_id" />
                        </div>
                        <div class="post">
                            <strong class="post-title">스터디 모집 제목</strong>
                            <p class="post-content">내용 내용 내용 내용 내용</p>
                            <div class="post-info">
                                <p class="post-writer sub-font">admin</p>
                                <p class="post-date sub-font">2021. 10. 27</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* right */
.right-wrap {
    width: 100vw;
    position: absolute;
    top: 5.6rem;
    z-index: 0;
}

main {
    max-width: 90%;
    min-height: 100vh;
    margin: 1rem auto;
}

/* top */
.unsign {
    display: flex;
    justify-content: space-between;
}

.signed {
    display: flex;
    flex-direction: column-reverse;
}

.login-button {
    margin-top: 1rem;
    padding: 0.6rem 0.4rem;
    background-color: var(--main-color);
    color: #fff;
    font-size: 1.4rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.8rem;
    font-weight: bold;
}

.logout-button {
    margin-top: 1rem;
    margin-left: 1.2rem;
    padding: 0.6rem 0.4rem;
    background-color: var(--accent-color);
    color: #fff;
    font-size: 1.4rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.8rem;
    font-weight: bold;
}

.user-info {
    font-size: 1.4rem;
    padding: 0.4rem;
}

.user-info strong {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--main-color);
    border-bottom: 0.2rem solid var(--border-color);
}

/* list */
.board-title {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--main-color);
}

.board-title > span {
    padding: 0.4rem;
    border-bottom: 0.2rem solid var(--border-color);
}

.board-list {
    margin-top: 2.4rem;
    color: var(--font-color);
}

.board-list li {
    margin-top: 1.2rem;
    padding: 1rem;
    border: 0.2rem solid var(--border-color);
    border-radius: 0.8rem;
}

.board-list li a {
    display: flex;
    justify-content: left;
}

.profile > img {
    display: block;
    width: 4em;
    height: 4rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 50%;
}

.post {
    margin-left: 6.25%;
    max-width: 70%;
}

.post-title {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
}

.post-content {
    font-size: 1.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.2rem;
}

.post > .post-info {
    display: flex;
    font-size: 1.2rem;
}

.post-writer::after {
    content: '\007C';
    margin-left: 0.5rem;
}

.post-date {
    width: 100%;
    margin-left: 0.5rem;
}

.sub-font {
    color: var(--sub-font-color);
}

/* laptop */
@media screen and (min-width: 1024px) {
    .menu-button,
    .close-button {
        display: none;
    }

    .right-wrap {
        position: initial;
        z-index: 0;
        -webkit-box-shadow: inset 8px 7px 46px -36px rgba(0, 0, 0, 0.71);
        -moz-box-shadow: inset 8px 7px 46px -36px rgba(0, 0, 0, 0.71);
        box-shadow: inset 8px 7px 46px -36px rgba(0, 0, 0, 0.71);
    }

    .right-wrap {
        max-height: 100vh;
        max-width: 100%;
        margin: 0 auto;
        overflow: scroll;
    }

    .board-list li a {
        display: flex;
        justify-content: left;
    }

    .profile > img {
        width: 5em;
        height: 5rem;
        margin-left: 40%;
    }

    .post {
        max-width: 80%;
    }

    .post-title {
        margin-bottom: 0.4rem;
    }

    .post-content {
        margin-bottom: 0.4rem;
    }
}

/* desktop */
@media screen and (min-width: 1280px) {
    .profile > img {
        margin-left: 50%;
    }
}

/* desktop-xl */
@media screen and (min-width: 1536px) {
    .profile > img {
        margin-left: 70%;
    }
    .post {
        max-width: 86%;
    }
}
</style>
