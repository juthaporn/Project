const express  = require('express');
const app = express();
const db = require("./util/database");

const authRoutes = require('./routes/auth');
const shop = require('./routes/shop')
const member = require('./routes/member')
const productType = require('./routes/productType')
const shopType = require('./routes/shopType')
const yearRent = require('./routes/yearRent')
const monthlyRent = require('./routes/monthlyRent')

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(authRoutes);
app.use('/shop', shop)
app.use('/member', member)
app.use('/productType', productType)
app.use('/shopType', shopType)
app.use('/yearRent', yearRent)
app.use('/monthlyRent', monthlyRent)

app.get("/test", function (req, res) {
    res.json({"message": "hello world"});
})

app.listen(3000); 