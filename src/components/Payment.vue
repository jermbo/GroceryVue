<template lang="pug">
  .payment-screen
    router-link(to="/") Back
    h1 You bull total is [TOTAL]
    .currency
      ul.paper
        li [1 Dollar]
        li [5 Dollars]
        li [10 Dollars]
        li [20 Dollars]
      ul.coin
        li [Penny]
        li [Nickle]
        li [Dime]
        li [Quarter]
</template>

<script>
export default {
  name: 'Payment',
}
</script>

<style lang="scss">
</style>
