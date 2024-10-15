<script setup>
  
import { NuxtLink } from '#components'
const BlogLink = h(NuxtLink, {to: "/blog"})
</script>
<template>
<section class="hero container">
  <div class="hero__imagecontainer">
    <NuxtImg class="hero__img" alt="xnpltn signature or photo or mascot" src="/signature.svg" :placeholder="[50, 25, 75, 5]" />
  </div>
  <div class="hero__intro">
    <p class="hero__text">
      Hi, I am <Strong>Platon</Strong>
      <span class="italic__text">&nbsp;&nbsp;read /pla.tɔ̃/ &nbsp; not &nbsp; /play-ton/</span><br />
      Don't know how you landed here but at least someone is watching my ugly site lol.
    </p>

    <p class="hero__text">
      Building things is what I enjoy. Interested in <Strong>Backend</Strong> and <Strong>Terminal Applications.</Strong> &nbsp;
      Anything Written in: <br />
      <Strong>Go</Strong> (<span class="italic__text">My Favourite</span>), &nbsp; <Strong>Rust</Strong>, &nbsp; <Strong>C</Strong>, &nbsp;<br />
      <Strong>Python</Strong>, &nbsp; and <Strong>Javascript</Strong> &nbsp; sign me up :/
    </p>

    <p><Strong>VueJs</Strong> is the best web framework of all time btw!</p>
    <div class="hero__buttons">
      <Button as="a" href="https://github.com/xnpltn" target="_blank">Github</Button>
      <Button :as="BlogLink">Read my blog</Button>
    </div>
  </div>
</section>
</template>
