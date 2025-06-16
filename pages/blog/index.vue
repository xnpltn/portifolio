<script setup>
  
useHead({
  title: "Platon @Xnpltn | Blog",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/signature.png' }
  ]
})

const { data } = await useAsyncData('posts', () => queryContent().find())

</script>
<template>
  <section class="container">
    <div class="container" style="padding-bottom: 1rem">
      <NuxtLink to="/">&lArr; homepage</NuxtLink>
    </div>
    <h2 class="blog__title">Latest Articles</h2>
    <div class="div" v-for="post, idx in data" :key="idx">
      <NuxtLink :to="'/blog'+ post._path">{{ post.title}}</NuxtLink> 
      - {{ post.description }}
      {{ post._path}}
    </div>
    <br/>
  </section>
</template>

