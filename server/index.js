const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();
const port = 3000;
const cors = require('cors')


const categoryRoute = require('./routes/category')
const brandRoute = require('./routes/brand')
const productRoute = require('./routes/product')
const userAuthRoute = require('./routes/auth')
const wishlistRoute = require('./routes/wishlist')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dotenv.config();

app.use(cors())

app.use(express.json())

app.use('/ecommerce/api', categoryRoute)
app.use('/ecommerce/api', brandRoute)
app.use('/ecommerce/api', productRoute)
app.use('/ecommerce/api', userAuthRoute)
app.use('/ecommerce/api', wishlistRoute)
app.use('/ecommerce/api', cartRoute)
app.use('/ecommerce/api', orderRoute)

app.get('', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(process.env.MONGO_URL).then(() => console.log('connected to mongodb server')).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});