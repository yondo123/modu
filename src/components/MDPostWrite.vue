<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <MDProfile></MDProfile>
            <div class="post-header">
                <select name="" id="">
                    <option value="free">Q&A</option>
                </select>
            </div>
            <div ref="edtior" class="editor-wrap"></div>
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
.editor-wrap {
    margin-top: 2.5rem;
}

/* desktop */
@media screen and (min-width: 1280px) {
    .editor-wrap {
        margin-top: 1.5rem;
    }
}
</style>
