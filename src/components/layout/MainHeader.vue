<template>
    <a href="/">Logo</a>
    <MainNavigation />
</template>

<script>
    import MainNavigation from '@/components/layout/MainNavigation.vue'

    export default {
        name: 'MainHeader',
        components: {
            MainNavigation
        }
    }
</script>

<style scoped>

</style>
