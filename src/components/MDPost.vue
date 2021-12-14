<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <MDProfile></MDProfile>
            <div class="post-wrap">
                <h2 class="post-title">{{ post.title }}</h2>
                <div class="post-info">
                    <div class="profile">
                        <img v-bind:src="post.profileUrl" v-bind:alt="post.writer" class="writer-img" />
                    </div>
                    <p class="publish">
                        <span class="writer">{{ post.writer }}</span
                        ><span class="date">{{ postDate }}</span>
                    </p>
                </div>
                <div class="post-content ProseMirror toastui-editor-contents" v-html="post.content"></div>
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
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters('post', {post: 'getPostInfo', postDate: 'getPostDate'})
    },
    components: {
        MDProfile,
        MDComment,
        MDCommentWrite
    },
    created() {
        this.$store.dispatch('post/requestPost', this.$route.params.postId);
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
