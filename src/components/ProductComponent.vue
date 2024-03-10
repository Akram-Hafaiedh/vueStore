<template>
    <div class="p-4 mb-4 border">
        <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        <img :src="product.image" alt="Product Image" class="w-24 h-24 mb-2">
        <p class="text-gray-700">{{ product.description }}</p>
        <p class="font-semibold text-gray-900">{{ product.price }}</p>
        <router-link :to="`/products/${product.id}`" class="text-blue-500">View Details</router-link>
    </div>
</template>

<script>

export default {
    name: 'ProductComponent',
    props: {
        product: Object
    },

}
</script>