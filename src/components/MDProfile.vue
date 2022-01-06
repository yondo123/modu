<template>
    <!-- signed -> 로그인, unsign -> 비 로그인 -->
    <div class="top-wrap unsign">
        <h2 class="board-title">
            <span>{{ menuHeader[selectedMenuId] }}</span>
        </h2>
        <button type="button" class="green-button login-button" v-on:click="redirect">Github Login</button>
        <div class="user-info hide">
            <span><strong>admin</strong>님, 안녕하세요.</span>
            <button type="button" class="logout-button">Logout</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState('style', ['menuHeader', 'selectedMenuId'])
    },
    methods: {
        redirect() {
            return (window.location.href = process.env.AWS_API_URL);
        }
    }
};
</script>

<style scoped>
@import url('../assets/css/board.css');

.login-button {
    margin-top: 1rem;
}
</style>
