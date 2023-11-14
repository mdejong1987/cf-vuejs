<template>
  <div class="bg-white">
    <div class="mx-auto">
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in wpPosts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">{{ formatDate(post.date) }}</time>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a :href="`post/${post.id}`">
                {{ post.title.rendered }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600" v-html="post.excerpt.rendered"></p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img :src="post._embedded['author'][0].avatar_urls[96]" alt="" class="h-10 w-10 rounded-full bg-gray-50">
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900 uppercase">
                <span class="absolute inset-0"></span>
                {{ post._embedded['author'][0].name }}
              </p>
              <p class="text-gray-600">{{ post._embedded['author'][0].description }}</p>
            </div>
          </div>
        </article>
      </div>
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