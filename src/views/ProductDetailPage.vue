<template>
    <div>
        <ProductDetail :product="product" v-if="product" />
    </div>
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue'; // Verify the path
import { products } from '@/data/products'; // Verify the data source

export default {
    name: 'ProductDetailPage',
    components: {
        ProductDetail,
    },
    data() {
        return {
            product: null,
        };
    },
    mounted() {
        const productId = parseInt(this.$route.params.id);
        this.product = products.find(product => product.id === productId);
    },
};
</script>
