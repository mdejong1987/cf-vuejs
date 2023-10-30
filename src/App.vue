<template>
  <MainHeader />
  <MainFooter :appName="footerText" />
</template>

<script>
import MainHeader from '@/components/layout/MainHeader.vue'
import MainFooter from '@/components/layout/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
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
