<template lang="pug">
  .wrapper
    .list
      GroceryList
    .receipt
      Receipt
</template>

<script>
import GroceryList from './GroceryList';
import Receipt from './Receipt';

export default {
  components: {
    GroceryList,
    Receipt
  }
}
</script>

<style lang="scss">
.list{
  width: 75%;
  background: #e5e5e5;
  float: left;
}

.receipt{
  width: 25%;
  float: right;
  background: #f5f5f5;
}
</style>
