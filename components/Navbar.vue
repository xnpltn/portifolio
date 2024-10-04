<script setup>

import { NuxtLink } from '#components'
const BlogLink = h(NuxtLink, {to: "/blog"})
const HomeLink = h(NuxtLink, {to: "/"})

</script>

<template>
  <header class="container header">
    <ul class="header__menu">
      <li>
        <Button class="header__link" :as="HomeLink" intent="primary" >Home</Button>
      </li>
      <li>
        <Button class="header__link" :as="BlogLink" intent="primary">Blog</Button>
      </li>
    </ul>
  </header>
</template>
