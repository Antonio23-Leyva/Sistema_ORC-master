const express = require('express');
const routeProducts = require('./routes/route_products');
const routeUsers = require('./routes/route_users');
const routeOrders = require('./routes/route_orders');


const app = express();


app.use(express.json());
app.use('/orc/v1/products', routeProducts);
app.use('/orc/v1/users', routeUsers);
app.use('/orc/v1/orders', routeOrders);



app.listen(3000, () =>{
    console.log('server running in port 3000');
});


