 const express = require('express')
const app = express()
const mongoose = require("mongoose")

// Connecting database
DB_URL = 'mongodb://localhost:27017/todo'
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
mongoose.connection.once('open', () => {
    console.log('Connected to database');
}).on('error', (error) => {
    console.log(`There is an error in connecting database: ${error}`);
});

// Template engine
app.set('views', 'views');
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route
const router = require('./router.js')
app.use('/', router)

const port = 3000
app.listen(port, () => {
	console.log('Server started on port', port)
})