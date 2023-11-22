<template>
    <MainNavigation />
    <PageBanner />
</template>

<script>
import MainNavigation from '@/components/layout/MainNavigation.vue'
import PageBanner from '@/components/layout/PageBanner.vue'
import M from 'materialize-css'

export default {
    components: {
        MainNavigation,
        PageBanner
    },
    mounted() {
        M.AutoInit()
    }
}
</script>