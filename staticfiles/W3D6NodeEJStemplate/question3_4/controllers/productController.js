const PRODUCTS = [
    {id: 101, name: 'Macbook pro', price: 3000, description: 'This is apple brand'},
    {id: 103, name: 'Dell laptop', price: 7000, description: 'This is Dell brand'},
    {id: 104, name: 'Dell monitor', price: 3000, description: 'Dell monitor'},
    {id: 105, name: 'Macbook pro 15', price: 5000, description: 'This is apple brand'}
];
module.exports ={
    get: (req, res) => {
        res.render('product', {
           product: PRODUCTS
        });
    },

};

