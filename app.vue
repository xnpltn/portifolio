<script setup>
useSeoMeta({
  title: 'Platon\' Portifolio Site.',
  ogTitle: 'Platon\'s Portifolio Site',
  description: 'I am software engineer. I like building stuffs with programming..',
  ogDescription: 'I am software engineer. I like building stuffs with programming..',
  ogImage: 'https://signature.png',
  twitterCard: 'The Coolest Portifolio LOL',
})

useHead({
htmlAttrs: {lang: "en"},

 meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/signature.png' }
  ]
})

</script>
<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
