<template lang="pug">
.item(v-on:click="addToCart(name, price)" v-bind:data-category="category")
	p {{name}} #[span {{price}}]
</template>

<script>
export default {
  props: ['name', 'price', 'category'],
  methods: {
    addToCart(name, price) {
      console.log(name, price)
    }
  }
}
</script>

<style lang="scss">

</style>
