<script setup lang="ts">
const { data } = await useAsyncData('posts', () => queryContent().find())
</script>

<template>
  <div class="container">
    <p>
      Hi, I am Xnpltn <br/>
      Don't know how you landed here but at least someone is watching my ugly site lol.
      I am a developer building systems and software. 
      One thing about me, I suck at css.
    </p>
    <hr/>
    <p>
      I like building things.<br/>
      Interested in science, robots and people.
      In my free time, i draw some weird stuffs you might not like.
      But in case you're interested, you can find my drawings <NuxtLink to="goofy-art">here</NuxtLink>
      <br/>

      Sometimes i write my thought. If interested, you can read my writings below :)
    </p>

    <h2>Recent Articles</h2>
    <div class="div" v-for="post, idx in data" :key="idx">
      <NuxtLink :to="`/blog${post._path}`">{{ post.title}}</NuxtLink> 
      - {{ post.description }}
    </div>
    <br/>

    <h2><a href="https://github.com/xnpltn">github.com/xnpltn</a></h2>
    <div class="div">
      <a href="https://github.com/xnpltn/tchat">tchat</a> 
      - Nothing useful. but how about a chat system that runs in your terminal. 
      The best usecase for <a href="https://go.dev/">Go</a>'s channels and Goroutines.
    </div>
    <div class="div">
      <a href="https://github.com/xnpltn/azshop">azshop</a> 
      - An e-commerce website axample built with go htmx and alpinejs
      I was just playing out with <a href="https://templ.guide/">Templ</a>
    </div>
    <div class="div">
      <a href="https://ai-writer.smallaitoolz.com/">AI Content Writer</a> 
      - Generate high-quality, engaging content with no copyright images 
      for any topic or platform in seconds. 
      Effortlessly create blog posts, marketing copy, social media content, and more with AI-powered precision.<br/>
      Go give me your money :/ <br/>
      <span class="gray">(Not public... runs on nuxt3, vuejs, supabase and stripe. Rewriting in Go.)</span>
    </div>
  </div>
</template>
