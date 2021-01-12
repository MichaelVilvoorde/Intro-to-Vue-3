const app = Vue.createApp({
    data: function(){
        return {
            product: 'Socks',
            description: 'Socks for all seasons.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com/',
            inStock: true,
            // test with -> true or false
            testShow: false,
            // test with -> true or false
            inventory: 6,
            // test with -> more then 10 or less then 10 or 0

            sale: true
            // test with -> true or false
        }
    }
})