<script setup>
  
import { NuxtLink } from '#components'
const BlogLink = h(NuxtLink, {to: "/blog"})
</script>
<template>
<section class="hero container">
  <div class="hero__imagecontainer">
    <img class="hero__img" alt="xnpltn signature or photo or mascot" src="/signature.svg" />
  </div>
  <div class="hero__intro">
    <p class="hero__text">
      Hi, I am <strong>Platon</strong>
      <span class="italic__text">&nbsp;&nbsp;read /pla.tɔ̃/ &nbsp; not &nbsp; /play-ton/</span><br />
      Don't know how you landed here but at least someone is watching my ugly site lol.
    </p>

    <p class="hero__text">
      Building things is what I enjoy. Interested in <strong>Backend</strong> and <strong>Terminal Applications.</strong> &nbsp;
      Anything Written in: <br />
      <strong>Go</strong> (<span class="italic__text">My Favourite</span>), &nbsp; <strong>Rust</strong>, &nbsp; <strong>C</strong>, &nbsp;<br />
      <strong>Python</strong>, &nbsp; and <strong>Javascript</strong> &nbsp; sign me up :/
    </p>

    <p><strong>VueJs</strong> is the best web framework of all time btw!</p>
    <div class="hero__buttons">
      <Button as="a" href="https://github.com/xnpltn" target="_blank">Github</Button>
      <Button :as="BlogLink">Read my blog</Button>
    </div>
  </div>
</section>
</template>
