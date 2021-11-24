<template>
    <!-- signed -> 로그인, unsign -> 비 로그인 -->
    <div class="top-wrap unsign">
        <h2 class="board-title"><span>Recruitment for study.</span></h2>
        <button type="button" class="green-button login-button">Github Login</button>
        <div class="user-info hide">
            <span><strong>admin</strong>님, 안녕하세요.</span>
            <button type="button" class="logout-button">Logout</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('../assets/css/board.css');

.login-button {
    margin-top: 1rem;
}
</style>
