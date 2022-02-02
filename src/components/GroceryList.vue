<template lang="pug">
.display
	.categories
		div(v-for="category in categories").cat-group
			Category(v-for="cat in category" v-bind:category="cat")
	.groveryItems
		div(v-for="item in inventory").items
			GItem(v-for="i in item" v-bind:name="i.name" v-bind:price="i.price" v-bind:category="i.category")
</template>


<script>
import inventory from '../data/inventory';
import categories from '../data/categories';
import Category from './Category';
import GItem from './GItem';
export default {
  name: 'GroceryList',
  data() {
    return {
      inventory,
			categories
    }
  },
  components: {
    Category,
    GItem,
  },
	methods: {

	},
	computed: {
		filterdItems(){
			console.log(this.inventory)
			return this.inventory
		}
	}
}
</script>

<style lang="scss">
.items {
    display: flex;
		flex-wrap: wrap;
    align-items: center;
    justify-content: center;
		border-bottom: 1px solid black;
}
.item {
    flex: 1 200px;
    user-select: none;
    cursor: pointer;
    &:hover {
        background: pink;
    }

    span {
        display: block;
        font-weight: bold;
        &:before {
            content: '$';
        }
    }
}

.cat-group{
	display: flex;
	justify-content: center;
}
</style>
