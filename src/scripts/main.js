// still learning Vue and found this good example os something I was trying to do
// https://codepen.io/Paolo-Duzioni/pen/bKKaZd by Paolo Duzioni
console.clear();
new Vue({
    el: "#app",
    data() {
        return {
            appTitle: "Vue Shop",
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
    methods: {
        addItem(prod) {
            this.total += prod.price;
            let inCart = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === prod.id) {
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
                    quantity: 1,
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
        },
        remove(item) {
            console.log(item);
            for (let i = item.quantity; i > 0; i--) {
                this.total -= item.price;
            }
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === item.id) {
                    this.cart.splice(i, 1);
                    break;
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
