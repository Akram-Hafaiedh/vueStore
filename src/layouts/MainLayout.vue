<template>
    <div>
        <!-- <slot name="header"></slot> -->

        <main :class="[wrapperClass, 'container mx-auto my-4']">
            <slot></slot>
        </main>

        <footer class="py-4 text-white bg-gray-800">
            <div class="container mx-auto text-center">
                &copy; 2024 VueCart. All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'MainLayout',
    props: {
        wrapperClass: {
            type: String,
            default: ''
        }
    }
}
</script>
