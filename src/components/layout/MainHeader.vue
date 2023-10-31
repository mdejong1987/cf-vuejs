<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
            </a>
        </div>
        <MainNavigation />
    </nav>
</template>

<script>
    import MainNavigation from '@/components/layout/MainNavigation.vue'

    export default {
        components: {
            MainNavigation
        }
    }
</script>