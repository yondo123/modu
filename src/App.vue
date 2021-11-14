<template>
    <div class="wrap md:grid md:grid-cols-12">
        <MDHeader></MDHeader>
        <router-view></router-view>
    </div>
</template>

<script>
import MDHeader from './components/MDHeader.vue';
export default {
    name: 'App',
    components: {
        MDHeader
    }
};
</script>
<style></style>
