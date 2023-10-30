<template>
    <h1>Posts</h1>
    {{ wpPosts }}
</template>

<script>
export default {
  name: 'GetPosts',
  props: ['wpPosts'],
  data() {
    return {
    }
  },
}
</script>