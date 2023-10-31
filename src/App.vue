<template>
  <MainHeader />
  <div class="container">
    <router-view />
  </div>
  <MainFooter />
</template>

<script>
import MainHeader from '@/components/layout/MainHeader.vue'
import MainFooter from '@/components/layout/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>