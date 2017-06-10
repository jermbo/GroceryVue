import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello;
import Checkout from '@/components/Checkout';
import Payment from '@/components/Payment';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/payment',
      component: Payment
    }
  ]
})
