const express = require('express')
require('dotenv').config({ path: __dirname + '/config/.env' })
const mysql = require('mysql');

const cookieParser = require('cookie-parser')
 
let blog = require('./routers/blog')
// let user = require('./routers/user')
const app = express() 

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Blogapp'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
});
global.db = db;

app.use(express.json())
app.use(cookieParser())
app.use(blog);
// app.use(user);

app.listen(5000, () => {
    console.log("Running at the port 5000");
})
