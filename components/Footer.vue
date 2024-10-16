<template>
  <footer class="footer container">
    <h1 class="footer__title">Xnpltn</h1>
    <h2 class="footer__copy">&copy; {{ new Date().getFullYear() }} Xnpltn</h2>
    <div class="footer__socials">
      <Button
        as="a"
        aria-label="see my github @xnpltn"
        intent="primary"
        href="https://github.com/xnpltn"
        target="_blank"
      >
        <Icon size="20" name="uil:github" />
      </Button>

      <Button
        as="a"
        aria-label="follow me on twitter(x.com), @xnpltn"
        intent="primary"
        href="https://x.com/xnpltn"
        target="_blank"
      >
        <Icon size="20" name="uil:twitter" />
      </Button>
    </div>
  </footer>
</template>
