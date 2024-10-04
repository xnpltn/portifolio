<template>
  <footer class="footer container">
    <h1 class="footer__title">Xnpltn</h1>
    <h2 class="footer__copy">&copy; {{new Date().getFullYear()}} Xnpltn</h2>
    <div class="footer__socials">
      <Button as="a" href="https://github.com" target="_blank">
        <Icon name="uil:github" />
      </Button>
      
      <Button as="a" href="https://x.com/xnpltn" target="_blank">
        <Icon name="uil:twitter" />
      </Button>
    </div>
  </footer>
</template>
