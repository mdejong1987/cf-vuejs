<template>
  <MainHeader />
  <MainNavigation />
  <MainFooter :appName="footerText" />
</template>

<script>
import MainHeader from './components/layout/MainHeader.vue'
import MainNavigation from './components/layout/MainNavigation.vue'
import MainFooter from './components/layout/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainNavigation,
    MainFooter
  },
  data() {
    return {
      footerText: 'Copyright 2023 - Vue JS Testing'
    }
  }
}
</script>

<style>

</style>
