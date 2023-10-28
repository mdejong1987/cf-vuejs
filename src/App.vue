<template>
  {{ bericht }}
  <MainHeader />
  <MainNavigation />
</template>

<script>
import MainHeader from './components/layout/MainHeader.vue'
import MainNavigation from './components/layout/MainNavigation.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainNavigation
  },
  data() {
    return {
      bericht: 'App.vue'
    }
  }
}
</script>

<style>

</style>
