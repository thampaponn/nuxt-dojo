<template>
    <div class="card text-center">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
                <p class="mb-7">{{ product.description }}</p>
                <!-- <p class="text-lg  my-4">Category: {{ product.category }}</p> -->
                <!-- <p class="text-lg  my-4">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p> -->
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>