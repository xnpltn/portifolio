<template>
<section class="hero container">
  <div class="hero__imagecontainer">
    <NuxtImg class="hero__img" alt="xnpltn signature or photo or mascot" src="/signature.svg" :placeholder="[50, 25, 75, 5]" />
  </div>
  <div class="hero__intro">
    <p class="hero__text">
      Hi, I am <Strong>Xnpltn &nbsp</Strong> <span class="italic__text">0x15</span> <br/>
      Don't know how you landed here but at least someone is watching my ugly site lol.
    </p>

    <p class="hero__text">
        I like building things.<br/> Interested in <Strong>Technology</Strong> and <Strong>Science</Strong> &nbsp;
    </p>

    <div class="hero__buttons">
      <Button as="a" href="https://github.com/xnpltn" target="_blank">Github</Button>
      <Button as="a" href="https://x.com/xnpltn" target="_blank">Twitter</Button>
    </div>
  </div>
</section>
</template>
