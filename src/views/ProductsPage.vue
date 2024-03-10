<template>
    <div class="container mx-auto">
        <h1 class="mb-4 text-2xl font-semibold">Products</h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <ProductComponent v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { products } from '@/data/products';
import ProductComponent from '@/components/ProductComponent.vue';

export default {
    name: 'ProductsPage',
    components: {
        ProductComponent
    },
    setup() {
        return {
            products
        };
    },
    data() {
        return {
            loading: true
        };
    },
    // Fetch products
    mounted() {
        // Simulate fetching products (replace with actual API call)
        setTimeout(() => {
            this.products = products;
            this.loading = false;
        }, 1000);
    }
};
</script>