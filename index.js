const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json req body
app.use(express.json());


// import router for todo api
const todoRoutes = require("./routes/todos");
// mount the toso api routes
app.use("/api/v1", todoRoutes);

//start server

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})

//db connection
const dbConnect = require("./config/database");
dbConnect();

// default rpute
app.get('/', (req, res)=>
res.send(`<h1>this is home page.</h1>`))