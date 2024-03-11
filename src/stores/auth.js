import { users } from "@/data/users";
import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        user: null,
    }),
    actions: {
        login(username, password) {
            const foundUser = users.find(user => user.username === username && user.password === password);
            if (foundUser) {
                const token = btoa(JSON.stringify(foundUser));
                localStorage.setItem('token', token);
                this.user = foundUser;
                this.authenticated = true
                return true;
                // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                // this.$router.push({ name: 'home' });
            } else {
                return false;
            }
        },
        logout() {
            localStorage.removeItem('token');
            this.authenticated = false;
            this.user = null;
        }
    }
})