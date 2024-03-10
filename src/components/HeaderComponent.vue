<template>
    <header class="py-4 text-white bg-gray-800">
        <div class="container flex items-center justify-between mx-auto">
            <div class="inline-flex items-center space-x-2">
                <h1 class="mr-10 text-2xl font-bold">VueCart</h1>
                <router-link class="text-blue-500" to="/">Home</router-link>
                <router-link class="text-blue-500" to="/about">About</router-link>
                <router-link class="text-blue-500" to="/products">Products</router-link>
            </div>
            <div class="space-x-2">
                <router-link class="text-blue-500" to="/auth/login">Login</router-link>
                <router-link class="text-blue-500" to="/auth/register">Register</router-link>
            </div>
            <!-- Add navigation links here -->
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>