<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <MDProfile></MDProfile>
            <div class="post-wrap">
                <h2 class="post-title">가나다라마바사아자차카타파하</h2>
                <div class="post-info">
                    <div class="profile">
                        <img src="../assets/logo.jpg" alt="user_id" class="writer-img" />
                    </div>
                    <p class="publish"><span class="writer">admin</span><span class="date">2021. 11. 09. 13:49</span></p>
                </div>
                <div class="post-content ProseMirror toastui-editor-contents" v-html="contentSource"></div>
                <div class="post-comments">
                    <MDComment />
                    <MDCommentWrite />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css';
import MDProfile from '../components/MDProfile.vue';
import MDComment from '../components/MDComment.vue';
import MDCommentWrite from '../components/MDCommentWrite.vue';
export default {
    data() {
        return {
            contentSource: ''
        };
    },
    components: {
        MDProfile,
        MDComment,
        MDCommentWrite
    },
    created() {
        this.contentSource = `<h3>강남역 스터디 모집</h3><p><br class="ProseMirror-trailingBreak"></p><p>무조건 약속 잘 지키시는 분만 환영합니다. </p><p><strong>철새 금지</strong></p><p><br class="ProseMirror-trailingBreak"></p><ul><li class="task-list-item checked" data-task="true" data-task-checked="true"><p>체크리스트 테스트</p></li></ul><blockquote><p>인용문구 테스트</p></blockquote><p><br class="ProseMirror-trailingBreak"></p><table><thead><tr><th><p>테이블 테스트</p></th><th><p>테이블 테스트2</p></th></tr></thead><tbody><tr><td><p>test</p></td><td><p>test</p></td></tr></tbody></table>`;
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
    font-size: 1.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--font-color);
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

.writer-img {
    margin-left: 0;
}

.writer,
.date {
    font-size: 1.2rem;
    color: var(--sub-font-color);
}

.date {
    margin-left: 0.5rem;
}

.post-content {
    margin-top: 1.2rem;
    padding: 0.8rem;
    border-top: 0.1rem solid var(--border-color);
    border-bottom: 0.1rem solid var(--border-color);
}

/* laptop */
@media screen and (min-width: 1024px) {
    .writer,
    .date {
        margin-left: 1.5rem;
    }

    .post-title {
        font-size: 2.2rem;
    }
}

/* desktop */
@media screen and (min-width: 1280px) {
}

/* desktop-xl */
@media screen and (min-width: 1536px) {
}
</style>
