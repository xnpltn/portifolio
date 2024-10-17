<script setup>

const route = useRoute();
const { data } = await useAsyncData(`article-${route.path}`, () => queryContent().where({_path: route.path}).findOne())

useSeoMeta({
  title: data.value.title,
  ogTitle: data.value.title,
  description: data.value.description,
  ogDescription: data.value.description,
  ogImage: '/signature.png',
  twitterCard: 'summary_large_image', 
  twitterTitle: data.value.title,
  twitterDescription: data.value.description,
  twitterImage: '/signature.png', 
  keywords: 'Neovim, Vim, Visual Studio Code, VScode, vi, text editor, programming, coding, rust, python, go',
});

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/signature.png' }],
});
//const BlogLink = h(NuxtLink, {to: "/blog"})

</script>


<template>
  <ContentRenderer :value="data" class="content"/>
</template>

