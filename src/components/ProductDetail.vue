<template>
    <div class="container px-4 py-8 mx-auto">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <!-- Left side: Image -->
            <div>
                <img :src="product.image" alt="Product Image" class="w-full h-auto">
            </div>

            <!-- Right side: Description -->
            <div>
                <h2 class="mb-2 text-xl font-semibold">{{ product.name }}</h2>
                <p class="mb-4 text-gray-700">{{ product.description }}</p>
                <p class="mb-2 font-semibold text-gray-900">{{ product.price }}</p>
                <!-- Add more details here if needed -->
                <button class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetail',
    props: {
        product: Object
    }
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>