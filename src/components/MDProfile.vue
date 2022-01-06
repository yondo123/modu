<template>
    <!-- signed -> 로그인, unsign -> 비 로그인 -->
    <div class="top-wrap" v-bind:class="{sign: userInfo}">
        <h2 class="board-title">
            <span>{{ menuHeader[selectedMenuId] }}</span>
        </h2>
        <button type="button" class="green-button login-button" v-bind:class="{hide: userInfo}" v-on:click="redirect">Github Login</button>
        <div class="user-info" v-bind:class="{hide: !userInfo}">
            <span><strong>admin</strong>님, 안녕하세요.</span>
            <button type="button" class="logout-button">Logout</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState('style', ['menuHeader', 'selectedMenuId', 'userInfo'])
    },
    methods: {
        redirect() {
            return (window.location.href = 'http://ec2-3-38-117-47.ap-northeast-2.compute.amazonaws.com:8090/oauth2/authorization/github');
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
