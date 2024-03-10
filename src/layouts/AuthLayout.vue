<!-- AuthLayout.vue -->
<template>
    <div>
        <header class="py-4 text-white bg-gray-800">
            <div class="container flex items-center justify-between mx-auto">
                <div class="space-x-2">
                    <h1 class="text-2xl font-bold">VueAuth</h1>
                    <router-link class="text-blue-500" to="/">Home</router-link>
                    <router-link class="text-blue-500" to="/about">About</router-link>
                    <router-link class="text-blue-500" to="/products">Products</router-link>
                </div>
                <div class="space-x-2">
                    <router-link to="/login" class="text-blue-500">Login</router-link>
                    <router-link to="/register" class="text-blue-500">Register</router-link>
                </div>
                <!-- Navigation links or buttons can be added here -->
            </div>
        </header>

        <main class="container mx-auto my-4">
            <slot></slot>
        </main>

        <footer class="py-4 text-white bg-gray-800">
            <div class="container mx-auto text-center">
                &copy; 2024 VueAuth. All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout'
}
</script>