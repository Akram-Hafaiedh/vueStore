<!-- AboutPage.vue -->
<template>
  <MainLayout>
    <template #header>
      <!-- Header content goes here -->
      <h2>About</h2>
    </template>
    <!-- Your page content goes here -->
    <router-view></router-view>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  components: {
    MainLayout
  }
}
</script>
