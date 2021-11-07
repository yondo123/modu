<template>
    <div class="wrap md:grid md:grid-cols-12">
        <MDHeader></MDHeader>
        <MDMain></MDMain>
    </div>
</template>

<script>
import MDMain from './components/MDMain.vue';
import MDHeader from './components/MDHeader.vue';
export default {
    name: 'App',
    components: {
        MDMain,
        MDHeader
    }
};
</script>
<style></style>
