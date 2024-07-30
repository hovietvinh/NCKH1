const express = require('express')
const app = express()


//Dùng .env
require("dotenv").config()
const port = process.env.PORT

//config cors
const cors = require('cors')
app.use(cors())


//Connect mongoose
const database = require("./config/database");
database.connect();

//Dùng req.body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true })) // for form data
app.use(express.json()) //for json


//Dùng pug
app.set("views","./views")
app.set('view engine', 'pug')

// Dùng file public cho views
app.use(express.static('public'))

//Kết nối routes
const route =require("./routes/client/index.route");
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})