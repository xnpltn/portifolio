<script setup>
  
useHead({
  title: "Xnpltn | Blog",
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
  <h1 class="blog__title">Latest Articles</h1>
  <ul class="blog__list">
    <li v-for="post in data" class="blog__item">
      <div class="blog__card">
        <NuxtLink :to="post._path" class="blog__link">{{ post.title }}</NuxtLink>
        <p class="blog__description">{{ post.description || post.title }}</p>
      </div>
    </li>
  </ul>
  </section>
</template>

<style scoped>
  ul {
  list-style: none; 
  padding: 0;  
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
}

a:hover {
  color: #2980b9;
  text-decoration: underline; 
}
</style>
