<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <MDProfile></MDProfile>
            <div class="post-wrap">
                <h2 class="post-title">웹개발 스터디원 구합니다.웹개발 스터디원 구합니다.</h2>
                <div class="post-info">
                    <div class="profile">
                        <img src="../assets/logo.jpg" alt="user_id" />
                    </div>
                    <p class="publish"><span class="writer">admin</span><span class="date">2021. 11. 09. 13:49</span></p>
                </div>
            </div>
            <div class="comment-wrap"></div>
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

.post-wrap {
    margin-top: 1.5rem;
    padding: 1.6rem 1.6rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.8rem;
}

.post-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.post-info {
    margin-top: 1.5rem;
    display: flex;
    position: relative;
}

.publish {
    position: absolute;
    margin-left: 0.8rem;
    top: 50%;
    left: 3rem;
    transform: translateY(-50%);
}

.writer,
.date {
    font-size: 1.2rem;
    color: var(--font-color);
}

.date {
    margin-left: 0.5rem;
}

/* laptop */
@media screen and (min-width: 1024px) {
    .writer,
    .date {
        margin-left: 1.5rem;
    }
}

/* desktop */
@media screen and (min-width: 1280px) {
}

/* desktop-xl */
@media screen and (min-width: 1536px) {
}
</style>
