<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        &copy;{{ footerText }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerText: 'Copyright 2023 - Vue Testing'
    }
  }
}
</script>