<template lang="pug">
  .item(v-on:click="addToCart(name, price)")
    p {{name}} #[span {{price}}]
</template>

<script>
export default {
  props: ['name', 'price'],
  methods: {
    addToCart(name, price){
      console.log(name, price)
    }
  }
}
</script>

<style lang="scss">

</style>
