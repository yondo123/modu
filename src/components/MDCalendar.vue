<template>
    <div class="right-wrap md:col-span=9 lg:col-span-10">
        <main>
            <!-- signed -> 로그인, unsign -> 비 로그인 -->
            <div class="top-wrap unsign">
                <h2 class="board-title"><span>Recruitment for study.</span></h2>
                <button type="button" class="green-button">Github Login</button>
                <div class="user-info hide">
                    <span><strong>admin</strong>님, 안녕하세요.</span>
                    <button type="button" class="logout-button">Logout</button>
                </div>
            </div>
            <div class="calendar-wrap">
                <v-calendar is-expanded color="green" :attributes="attrs" />
            </div>
        </main>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('../assets/css/board.css');
/* calendar */
.calendar-wrap {
    margin-top: 2.4rem;
    border: 0.1rem solid var(--border-color);
    border-radius: 0.8rem;
}
</style>
