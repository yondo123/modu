<template>
    <ul>
        <li class="comment-item" v-for="(item, index) in this.comments" :key="index">
            <div class="comments">
                <div class="profile">
                    <img src="../assets/logo.jpg" alt="user_id" class="comment-user" />
                </div>
                <div class="comment-content">
                    <p class="comment-info">
                        <span class="writer">{{ item.writer }}</span
                        ><span class="date">{{ item.createDate }}</span>
                    </p>
                    <p class="comment">{{ item.content }}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            postId: this.$route.params.postId
        };
    },
    computed: {
        ...mapGetters('post', {comments: 'getComments'})
    },
    methods: {
        formatDate(date) {
            return `${date.substr(0, 4)}. ${date.substr(4, 2)}. ${date.substr(6, 2)}. ${date.substr(8, 2)}:${date.substr(10, 2)}`;
        }
    },
    beforeUpdate() {},
    created() {
        this.$store.dispatch('post/requestComments', this.postId);
    }
};
</script>

<style scoped>
.comments {
    padding: 0 0.8rem;
    margin: 0.8rem 0;
    display: flex;
    position: relative;
}

ul .comment-item {
    border-bottom: 0.1rem solid var(--border-color);
}

.comment {
    font-size: 1.2rem;
}

.comment-info {
    padding: 0.7rem 0;
}

.writer,
.date {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--sub-font-color);
}

.comment-content {
    display: flex;
    margin-left: 0.5rem;
    flex-direction: column;
    margin-left: 4.4rem;
}

.profile {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2%;
}

.comment-user {
    margin-left: 0;
    min-width: 2.4rem;
}

/* laptop */
@media screen and (min-width: 1024px) {
    .writer,
    .date,
    .comment {
        margin-left: 1.5rem;
    }

    .comment-content {
        margin-left: 6.4rem;
    }
}
</style>
