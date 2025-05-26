
const express = require('express')
const app = express()
const router = require('./src/routes/api')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')


// Cors Origin enable
app.use (cors());

// Security Implementation
app.use (helmet());
app.use (express.json({limit:'20mb' }));
app.use (express.urlencoded({extended:true}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000 // Limit each IP to 3000 requests per windowMs
});
app.use(limiter);

// Body Parser Implementation
app.use(bodyParser.json());


// Database Connection
// let URL = "mongodb+srv://mubin:mubin007@cluster0.1lz4ur6.mongodb.net/";
require('dotenv').config();
const mongo_url = process.env.MONGO_CONN;

let OPTION = {user:"", pass:"", autoIndex: true}
mongoose.connect(mongo_url, OPTION).then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.log(err);
});


 app.use("/api/v1", router);

module.exports = app;