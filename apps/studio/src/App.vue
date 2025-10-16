<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <Button>Click me</Button>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
