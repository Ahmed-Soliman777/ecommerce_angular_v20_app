const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();
const port = 3000;

const categoryRoute = require('./routes/category')

dotenv.config();

app.use(express.json())

app.use('/ecommerce/api', categoryRoute)

app.get('', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(process.env.MONGO_URL).then(() => console.log('connected to mongodb server')).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});