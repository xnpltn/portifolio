<script setup>
useSeoMeta({
  title: "Xnpltn - Software Engineer | Backend | Terminal Apps",
  ogTitle: "xnpltn - Software Engineer | Backend Developer | Terminal Apps Developer",
  description: 'xnpltn on twitter, software engineer specializing in backend development, terminal applications, and systems programming',
  ogDescription: 'xnpltn on twitter and internet, A backend developer, A freelancer , terminal apps developer, and systems developer',
  ogImage: '/signature.png',
  twitterCard: 'summary_large_image', 
  twitterTitle: "xnplt - Software Engineer | Backend Developer",
  twitterDescription: 'Backend Developer, Freelancer, Systems Developer. Gamer',
  twitterImage: '/signature.png', 
  keywords: 'xnpltn, software engineer, backend development, terminal applications, Go, Rust, C, programming, portfolio, Vue, Javascript, Python',
});

useHead({
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/signature.png' }],
});
</script>

<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
