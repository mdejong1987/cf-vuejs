<template>
  <div class="container">
    <div class="row">
      <article v-for="post in wpPosts" :key="post.id" class="col s4">
        <div class="card">
          <div class="card-image">
            <img :src="post._embedded['wp:featuredmedia'][0].source_url" alt="">
          </div>

          <div class="card-content">
            {{ formatDate(post.date) }}

            <h3>
              <a :href="`post/${post.id}`">
                {{ post.title.rendered }}
              </a>
            </h3>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetPosts',
  props: ['wpPosts'],
  methods: {
    formatDate(value) {
      return new Date(value).toLocaleDateString('nl-NL', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    }
  }
}
</script>