const app = Vue.createApp({
    data: function(){
        return {
            cart:0,
            product: 'Socks',
            description: 'Socks for all seasons.',
            image: './assets/images/socks_blue.jpg',
            inStock: true,

            details: ['50% cotton', '30% wool', '20% polyester'],

            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                // added image
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
                // added image
            ],

            sizes: ['S', 'M', 'L', 'XL']


        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        RemoveFromCart(){
            if(this.cart > 0){
              this.cart -=1  
            }
            
        },

        updateImage(variantImage) {
            this.image = variantImage
        }
        // code for hover
    }
})