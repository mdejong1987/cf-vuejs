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

  <div class="container">
    <div class="row">
      <div class="col s12">
        <blockquote>
          This is an example quotation that uses the blockquote tag.
        </blockquote>
      </div>
    </div>
  </div>


  <div class="container">
    <div class="row">
      <div class="col s4">
        <h3 class="header">Services</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a dolor non est sodales suscipit quis eu sapien.
          Vestibulum a enim eu dolor convallis efficitur semper non dui.
        </p>
        <a class="waves-effect waves-light btn-large" href="#">Wave</a>
      </div>
      <div class="col s8">
        <div class="row">
          <div class="col s6">
            <i class="large material-icons">backup</i>
            <h4 class="header promo-caption">Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <div class="col s6">
            <i class="large material-icons">backup</i>
            <h4 class="header promo-caption">Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col s6">
            <i class="large material-icons">backup</i>
            <h4 class="header promo-caption">Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div class="col s6">
            <i class="large material-icons">backup</i>
            <h4 class="header promo-caption">Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
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