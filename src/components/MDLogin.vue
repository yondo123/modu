<template>
    <p>{{ $route.query.jwtToken }}</p>
</template>

<script>
export default {
    created() {
        const token = this.$route.query.jwtToken.trim();
        if (token.length) {
            localStorage.setItem('jwt', token);
        }
        this.$store.commit('style/changeLoginState');
    }
};
</script>
