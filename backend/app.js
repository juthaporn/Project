const express  = require('express');
const app = express();
const db = require("./util/database");

const authRoutes = require('./routes/auth');

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(authRoutes);

app.get("/test", function (req, res) {
    res.json({"message": "hello world"});
})

app.listen(3000); 