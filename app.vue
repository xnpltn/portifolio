<script setup>
useSeoMeta({
  title: "Platon's Portfolio - Software Engineer | Backend | Terminal Apps",
  ogTitle: "Platon's Portfolio - Software Engineer",
  description: 'Experienced software engineer specializing in backend development, terminal applications, and systems programming with Go, Rust, C, and more.',
  ogDescription: 'Explore my portfolio. I specialize in backend development, terminal apps, and systems programming with a focus on Go, Rust, and C.',
  ogImage: '/signature.png',
  twitterCard: 'summary_large_image', 
  twitterTitle: "Platon's Portfolio - Software Engineer",
  twitterDescription: 'Backend developer and terminal applications specialist. Learn more about my work and projects.',
  twitterImage: '/signature.png', 
  keywords: 'Platon, software engineer, backend development, terminal applications, Go, Rust, C, programming, portfolio, Vue, Javascript, Python',
});

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/signature.png' }],
});
</script>


</script>
<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
