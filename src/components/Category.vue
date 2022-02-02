<template lang="pug">
.category(v-bind:class="{ 'is-active': checked }" v-on:click="changeCategory(category.name)")
	span {{category.name}}
</template>

<script>
export default {
	data(){
		return {
			checked: false
		}
	},
  props: ['category'],
  methods: {
		changeCategory(category){
			this.checked = !this.checked;
			this.$bus.$emit(category, this.checked);
		}
  }
}
</script>

<style lang="scss">
.category span{
	display: inline-block;
	padding: 25px 50px;
	cursor: pointer;

	&:hover{
		background: pink;
	}
}

.is-active{
	background: hotpink;
}
</style>
