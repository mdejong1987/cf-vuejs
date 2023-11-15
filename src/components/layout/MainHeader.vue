<template>
    <MainNavigation />
    <div class="parallax-container">
        <div class="parallax"><img v-bind:src="image"></div>
    </div>
</template>

<script>
import MainNavigation from '@/components/layout/MainNavigation.vue'
import M from 'materialize-css'

export default {
    components: {
        MainNavigation
    },
    data: function () {
        return {
            image: 'images/parallax1.jpg'
        }
    },
    mounted() {
        M.AutoInit()
    }
}
</script>