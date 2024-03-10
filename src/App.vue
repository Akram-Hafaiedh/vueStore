<template>
  <RouterView />
</template>

<script>
// import MainLayout from '@/layouts/MainLayout.vue'
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    // MainLayout,
    RouterView
  }
}
</script>
