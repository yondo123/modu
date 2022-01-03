<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <MDProfile></MDProfile>
            <div class="post-header">
                <label for="postTitle" class="title-label">제목</label>
                <input type="text" id="postTitle" placeholder="제목을 입력해주세요.." size="150" v-model="title" />
            </div>
            <div ref="edtior" class="editor-wrap"></div>
            <div class="post-button-wrap">
                <button type="button" class="green-button" v-on:click="$router.go(-1)">취소</button>
                <button type="button" class="green-button" v-on:click="sendContent">글쓰기</button>
            </div>
        </main>
    </div>
</template>

<script setup>
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from '@toast-ui/editor';
import {ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useStore} from 'vuex';
let toastEditor;

const route = useRoute();
const router = useRouter();
const store = useStore();
const edtior = ref(null);
const title = ref('');

function sendContent() {
    store.dispatch('post/sendPost', {
        title: title.value,
        content: toastEditor.getHTML(),
        boardId: route.params.boardId
    });
    return router.go(-1);
}

function uploadImage(blob) {
    store.dispatch('post/requestSendImage', blob).then(function (response) {
        console.log(JSON.stringify(response));
    });
}

onMounted(function () {
    toastEditor = new Editor({
        el: edtior.value,
        height: '720px',
        initialEditType: 'wysiwyg',
        previewStyle: 'vertical',
        hooks: {
            addImageBlobHook: (blob, callback) => {
                const imageSrc = uploadImage(blob);
                callback(imageSrc, 'alt text');
                return false;
            }
        }
    });
    toastEditor.getMarkdown();
});
</script>
<style scoped>
@import url('../assets/css/board.css');

main {
    position: relative;
}
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
    margin-top: 2.5rem;
}

.post-button-wrap button {
    margin-left: 1.2rem;
}

/* laptop */
@media screen and (min-width: 1024px) {
    .post-button-wrap {
        margin-top: 1.5rem;
    }

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
