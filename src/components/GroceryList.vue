<template lang="pug">
.groveryItems
	div(v-for="item in inventory").items
		GItem(v-for="i in item" v-bind:name="i.name" v-bind:price="i.price")
</template>


<script>
import inventory from '../data/inventory';
import GItem from './GItem';
export default {
  name: 'GroceryList',
  data() {
    return {
      inventory
    }
  },
  components: {
    GItem
  }
}
</script>

<style lang="scss">
.items{
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
}

.item{
  flex: 1;
  user-select: none;
  cursor: pointer;

  &:hover{
    background: pink;
  }

  span{
    display: block;
    font-weight: bold;

    &:before{
      content: '$';
    }
  }
}
</style>
