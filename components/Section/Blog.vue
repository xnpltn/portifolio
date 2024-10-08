<script setup>

const {data} = await useAsyncData('posts', () => queryContent().find())

console.log(data.value)

</script>

<template>

<section class="container blog">
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

