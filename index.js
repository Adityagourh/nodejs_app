require('dotenv').config();
const express = require('express');
const router = require('./routes/userRoutes');
const app =express();

app.use(express.json());

app.use('/', router);

app.listen(9000, () =>{
console.log("Server is running ");
})
