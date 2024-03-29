<template>
    <div class="card text-center">
        <NuxtLink :to="`/products/${product.id}`">
            <img :src="product.image" alt="product thumb" class="thumb h-full">
        </NuxtLink>
        <p class="title">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>