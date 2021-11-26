<template>
    <ul>
        <li class="comment-item">
            <div class="comments">
                <div class="profile">
                    <img src="../assets/logo.jpg" alt="user_id" class="comment-user" />
                </div>
                <div class="comment-content">
                    <p class="comment-info"><span class="writer">admin</span><span class="date">2021. 11. 26. 13:11</span></p>
                    <p class="comment">
                        오, 어디서하나요 오, 어디서하나요오, 어디서하나요오, 어디서하나요오, 어디서하나요오, 어디서하나요오, 어디서하나요오, 어디서하나요오, 어디서하나요오, 어디서하나요오,
                        어디서하나요
                    </p>
                </div>
            </div>
        </li>
        <li class="comment-item">
            <div class="comments">
                <div class="profile">
                    <img src="../assets/logo.jpg" alt="user_id" class="comment-user" />
                </div>
                <div class="comment-content">
                    <p class="comment-info"><span class="writer">admin</span><span class="date">2021. 11. 26. 13:11</span></p>
                    <p class="comment">저도 참여하고 싶습니다.</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {};
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
