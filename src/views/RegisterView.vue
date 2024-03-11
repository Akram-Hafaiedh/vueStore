<template>
    <div class="">
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <router-link to="/" class="text-3xl font-bold text-white">
                VueStore
            </router-link>
            <div class="w-full max-w-md px-4 py-8 mt-4 bg-gray-800 rounded shadow shadow-white">
                <h1 class="mb-4 text-3xl font-semibold text-center text-white">Register</h1>
                <form @submit.prevent="register" class="space-y-4">
                    <div>
                        <label class="block mb-2 text-sm font-bold text-white" for="username">
                            Username
                        </label>
                        <input v-model="username"
                            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-white" for="email">
                            Email
                        </label>
                        <input v-model="email"
                            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email">
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-white" for="password">
                            Password
                        </label>
                        <input v-model="password"
                            class="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************">
                    </div>
                    <div class="flex items-center justify-between mx-6">
                        <button
                            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="submit">
                            Register
                        </button>
                        <router-link
                            class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                            :to="{ name: 'login' }">
                            Login
                        </router-link>
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
import { users } from '@/data/users.js';
export default {
    name: 'RegisterView',
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            const newUser = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            users.push(newUser);
            this.username = '';
            this.email = '';
            this.password = '';

            this.$router.push({ name: 'login' });
            console.log('Users:', users);
            console.log('Registered user:', newUser);
        }
    }
}
</script>