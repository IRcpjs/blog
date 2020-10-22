<template>
<div>
  <div v-for="post in posts">
    <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts').limit(5).fetch()
    return {
      posts
    }
  }
}
</script>
