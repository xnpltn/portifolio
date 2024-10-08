<script setup>
  
useHead({
  title: "Blog - Xnpltn",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/signature.png' }
  ]
})

const {data} = await useAsyncData('posts', () => queryContent().find())
const route = useRoute()


console.log(data.value)

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
  list-style: none; /* Remove bullets */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

li {
  margin-bottom: 10px; /* Space between list items */
}

a {
  text-decoration: none; /* Remove underline */
  color: #3498db; /* Link color */
  font-weight: bold;
}

a:hover {
  color: #2980b9; /* Change color on hover */
  text-decoration: underline; /* Add underline on hover */
}
</style>
