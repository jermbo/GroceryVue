// still learning Vue and found this good example os something I was trying to do
// https://codepen.io/Paolo-Duzioni/pen/bKKaZd by Paolo Duzioni
console.clear();

const Product = Vue.component("Product", {
    template: "#product",
    props: ["prod"],
    methods: {
        addItem(prod) {
            this.$emit("clicked", prod);
        }
    }
});

const Cart = Vue.component("Cart", {
    props: ["cart", "total"],
    template: "#cart",
    methods: {
        add(item) {
            this.$emit("add", item);
        },
        sub(item) {
            this.$emit("sub", item);
        }
    }
});

Vue.filter("currency", price => `$${price.toFixed(2)}`);

new Vue({
    el: "#app",
    data() {
        return {
            appTitle: "Component Vue Shop",
            products: [
                { id: 1, title: "product 1", price: 1.88 },
                { id: 2, title: "product 2", price: 2.88 },
                { id: 3, title: "product 3", price: 3.88 },
                { id: 4, title: "product 4", price: 4.88 }
            ],
            cart: [],
            total: 0
        };
    },
    components: {
        product: Product,
        cart: Cart
    },
    methods: {
        addToCart(prod) {
            this.total += prod.price;
            let inCart = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id == prod.id) {
                    inCart = true;
                    this.cart[i].quantity++;
                    break;
                }
            }
            if (!inCart) {
                this.cart.push({
                    id: prod.id,
                    title: prod.title,
                    price: prod.price,
                    quantity: 1
                });
            }
        },
        add(item) {
            this.total += item.price;
            item.quantity++;
        },
        sub(item) {
            this.total -= item.price;
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].id === item.id) {
                        this.cart.splice(i, 1);
                        break;
                    }
                }
            }
        }
    },
    filters: {
        currency(price) {
            return `$${price.toFixed(2)}`;
        }
    }
});
