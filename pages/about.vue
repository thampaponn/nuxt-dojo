<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis eius reprehenderit placeat debitis
      dolor aspernatur reiciendis corporis voluptatibus quisquam deserunt quam id fugit, nostrum aliquam a, totam
      quaerat. Obcaecati!</p>
    <div>
      {{ data[0].title }}
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('http://localhost:8000/products')
console.log(data);
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>