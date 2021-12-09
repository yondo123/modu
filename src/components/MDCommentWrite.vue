<template>
    <!-- comment form -->
    <div class="w-full max-w-12xl bg-white rounded-lg px-4 pt-2">
        <div class="flex flex-wrap -mx-3 mb-2">
            <h2 class="px-6 pt-2 pb-2 text-green-600 text-xl font-bold">Comment</h2>
            <div class="w-full md:w-full px-3 mb-2 mt-0">
                <textarea
                    v-model="this.content"
                    class="text-xl rounded border border-gray-300 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="댓글을 입력해주세요."
                    required
                ></textarea>
            </div>
            <div class="w-full md:w-full flex items-start px-3">
                <div class="flex items-start w-1/2 text-gray-700 px-3 mr-auto"></div>
                <div class="-mr-1">
                    <button
                        v-on:click="
                            sendComment({
                                content: this.content,
                                post: this.postId
                            })
                        "
                        type="button"
                        class="bg-green-400 text-gray-200 font-medium py-1 px-4 border border-gray-300 rounded-xl tracking-wide mr-1 mt-4"
                    >
                        <span class="text-xl text-gray-100">작성</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data() {
        return {
            content: '',
            postId: this.$route.params.postId
        };
    },
    methods: {
        ...mapActions('post', ['sendComment'])
    }
};
</script>

<style scoped></style>
