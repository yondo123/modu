<template>
    <!-- signed -> 로그인, unsign -> 비 로그인 {sign: isLogin}-->
    <div class="top-wrap" v-bind:class="[isLogin ? 'sign' : 'unsign']">
        <h2 class="board-title">
            <span>{{ menuHeader[selectedMenuId] }}</span>
        </h2>
        <div v-if="isLogin">
            <div class="user-info">
                <span
                    ><strong>{{ userInfo.id }}</strong
                    >님, 안녕하세요.</span
                >
                <button type="button" class="logout-button">Logout</button>
            </div>
        </div>
        <div v-else>
            <button type="button" class="green-button login-button" v-on:click="redirect">Github Login</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            isLogin: false
        };
    },
    computed: {
        ...mapState('style', ['menuHeader', 'selectedMenuId', 'userInfo'])
    },
    methods: {
        redirect() {
            return (window.location.href = 'http://ec2-3-38-117-47.ap-northeast-2.compute.amazonaws.com:8090/oauth2/authorization/github');
        }
    },
    created() {
        if (this.userInfo && this.userInfo.id) {
            this.isLogin = true;
        }
        console.log(JSON.stringify(this.userInfo));
    }
};
</script>

<style scoped>
@import url('../assets/css/board.css');

.login-button {
    margin-top: 1rem;
}
</style>
