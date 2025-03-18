<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps({
  error: Object as () => NuxtError
})
const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <section class="container error">
    <Lost/>
    <div class="error-content">
      <h2 class="error-title">You lost dummy!</h2>
      <button @click="handleError" class="home-button">Go back Home</button>
    </div>
  </section>
</template>
<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.home-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;  /* blue-500 */
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #2563eb;  /* blue-600 */
}
</style>
