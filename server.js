
const dotenv = require('dotenv');
const express = require("express")
const morgan = require('morgan')
const bodyParser = require("body-parser")
const path = require("path")


const connectDB = require('./server/database/connection');


const app = express();
dotenv.config({path : '.env'})
const PORT = process.env.PORT || 8080


// log request
app.use(morgan('tiny'));

//mongodb connection

connectDB();

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended : true }))
// app.use(bodyParser.json())


// set view engine
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/fonts', express.static(path.resolve(__dirname, "assets/fonts")))
app.use('/icon', express.static(path.resolve(__dirname, "assets/icon")))
app.use('/images', express.static(path.resolve(__dirname, "assets/images")))
app.use('/pages', express.static(path.resolve(__dirname, "assets/pages")))
app.use('/lib', express.static(path.resolve(__dirname, "assets/lib")))
app.use('faces',express.static(path.resolve(__dirname,"images/faces")))
app.use('/order', express.static(path.resolve(__dirname,"assets/order")));
app.use('/video', express.static(path.resolve(__dirname,"assets/video")));


app.use("/", require('./server/routes/frontEnd'));
app.use("/admin",require('./server/routes/admin'));
app.use("/staff",require('./server/routes/staff'));
app.use("/orders", require('./server/routes/orders.routes'));
    



app.listen(PORT,()=>{ console.log(`Server is running on http://localhost:${PORT}`)})