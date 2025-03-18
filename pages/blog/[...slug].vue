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
  keywords: data.value.head.meta.filter((x)=> x.name.toLowerCase() == "keywords")[0].content,
});

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/signature.png' }],
});

</script>


<template>
  <div class="container" style="padding-bottom: 1rem">
    <NuxtLink to="/">&lArr; homepage</NuxtLink>
  </div>
  <ContentRenderer 
    :value="data" 
    class="container blog" 
  />
</template>

