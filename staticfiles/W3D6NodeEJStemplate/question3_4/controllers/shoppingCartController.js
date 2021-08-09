module.exports ={
    get: (req, res) => {
        const CARTS = [
            {name: 'Dell laptop', price: 7000, quantity: 3},
            {name: 'Dell monitor', price: 3000, quantity: 4},
        ];
        res.render('shoppingCart', {
            product: CARTS
        });
    },

};