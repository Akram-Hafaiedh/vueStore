<template>
    <div class="">
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <router-link to="/" class="text-3xl font-bold text-white">
                VueStore
            </router-link>
            <div class="w-full max-w-md px-4 py-8 mt-4 bg-gray-800 rounded shadow shadow-white">
                <h1 class="mb-4 text-3xl font-semibold text-center text-white">Login</h1>
                <form @submit.prevent="login" class="space-y-4">
                    <div>
                        <label class="block mb-2 text-sm font-bold text-white" for="username">
                            Username
                        </label>
                        <input v-model="username"
                            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username">
                        <p v-if="!username" class="text-red-500">Username is required</p>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-white" for="password">
                            Password
                        </label>
                        <input v-model="password"
                            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************">
                        <p v-if="!password" class="text-red-500">Password is required</p>
                    </div>
                    <p v-if="error" class="text-center text-red-500 ">{{ error }}</p> <!-- Display error message -->
                    <div class="flex items-center justify-between mx-6">
                        <button
                            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit">
                            Sign In
                        </button>
                        <router-link
                            class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                            :to="{ name: 'register' }">
                            Register
                        </router-link>
                    </div>
                    <div class="text-center">
                        <a class="text-sm font-bold text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p class="mt-2 text-xs text-center text-gray-400">
                    &copy;2024 VueStore. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { users } from '@/data/users';
import { useAuthStore } from '@/stores/auth';

export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: '',
            error: '',
        }
    },
    methods: {
        async login() {
            if (!this.username || !this.password) {
                this.error = 'Username and password are required';
                return;
            }
            useAuthStore.login(this.username, this.password);
            const foundUser = users.find(user => user.username === this.username && user.password === this.password);
            if (foundUser) {
                const token = btoa(JSON.stringify(foundUser));
                localStorage.setItem('token', token);
                // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                this.$router.push({ name: 'home' });
            } else {
                this.error = 'Invalid username or password';
            }
            // Implement login functionality here
            console.log('Logging in with username:', this.username, 'and password:', this.password);
        }
    }
}
</script>