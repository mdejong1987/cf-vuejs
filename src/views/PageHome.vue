<template>
  <section class="section">
    <GetPosts :wpPosts="posts" />
  </section>

  <section class="section">
    <GetMembers :wpMembers="members" />
  </section>

  <div class="container">
    <section class="card teal lighten-3">
      <div class="card-content white-text">
        <h2 class="header center-align">Test</h2>
        <p class="flow-text center-align">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero enim, suscipit at justo sit amet,
          lobortis. Vivamus libero enim, suscipit at justo sit amet,
          lobortis
        </p>
      </div>
    </section>
  </div>
</template>
  
<script>
import GetPosts from '@/components/posts/GetPosts.vue'
import GetMembers from '@/components/posts/GetMembers.vue'

export default {
  components: {
    GetPosts,
    GetMembers
  },
  data() {
    return {
      posts: [],
      members: [],
    }
  },
  methods: {
    async getPosts() {
      try {
        let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/posts/?_embed");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async getMembers() {
      try {
        let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/member/?_embed");
        this.members = await response.json();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getPosts();
    this.getMembers();
  }
}
</script>