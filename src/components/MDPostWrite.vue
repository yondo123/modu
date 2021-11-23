<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <MDProfile></MDProfile>
            <div class="post-header">
                <label for="postTitle" class="title-label">제목</label>
                <input type="text" id="postTitle" placeholder="제목을 입력해주세요.." size="150" />
            </div>
            <div ref="edtior" class="editor-wrap"></div>
            <div class="post-button-wrap">
                <button type="button" class="green-button">취소</button>
                <button type="button" class="green-button">글쓰기</button>
            </div>
        </main>
    </div>
</template>

<script setup>
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from '@toast-ui/editor';
import {ref, onMounted} from 'vue';

const edtior = ref(null);

onMounted(() => {
    console.log('onMounted');

    console.log('====' + edtior.value);
    const toastEditor = new Editor({
        el: edtior.value,
        height: '720px',
        initialEditType: 'wysiwyg',
        previewStyle: 'vertical'
    });
    toastEditor.getMarkdown();
});
</script>
<style>
@import url('../assets/css/board.css');
.post-header {
    display: flex;
    font-size: 1.6rem;
    padding: 0.8rem;
    width: auto;
}

.title-label {
    color: var(--main-color);
    font-weight: 700;
    margin-right: 1.2rem;
    padding-top: 1rem;
}

.post-header > input {
    border: solid 0.1rem var(--border-color);
    border-radius: 0.5rem;
    padding: 0.8rem;
    width: 24rem;
}

.post-header > input:focus {
    box-shadow: 0.2rem 0.2rem var(--main-color);
}

.editor-wrap,
.post-header {
    margin-top: 2.5rem;
}

.post-button-wrap {
    position: absolute;
    right: 0.1rem;
}

.post-button-wrap button {
    margin-left: 1.2rem;
}

/* laptop */
@media screen and (min-width: 1024px) {
    .post-header > input {
        width: 48rem;
    }

    .post-button-wrap {
        margin-top: 2.5rem;
    }
}

/* desktop */
@media screen and (min-width: 1280px) {
    .editor-wrap {
        margin-top: 1.5rem;
    }

    .post-header > input {
        width: 72rem;
    }
}

/* desktop-xl */
@media screen and (min-width: 1536px) {
}
</style>
