<template>
  <section class="section">
    <GetPosts :wpPosts="posts" />
  </section>

  <section class="section">
    <GetMembers :wpMembers="members" />
  </section>

  <section class="section content has-background-primary-dark">
    <h2>Test</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero enim, suscipit at justo sit amet, lobortis
      mollis eros. Nam ut viverra diam. Ut volutpat at erat aliquam pellentesque. Morbi vulputate pretium vestibulum.
      Phasellus interdum eleifend lorem, ac rhoncus risus. Nunc vestibulum commodo mi vulputate semper. In nisl lectus,
      rutrum nec rutrum sit amet, posuere eu urna. Nullam eget varius quam, sed pretium odio. Donec ex eros, tristique non
      semper vitae, commodo in magna.
    </p>
  </section>

  <div class="section">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          Test 1a
        </div>
        <div class="level-item">
          Test 1b
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          Test2
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
        let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/posts");
        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async getMembers() {
      try {
        let response = await fetch("https://headless.collectr.nl/wp-json/wp/v2/member");
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