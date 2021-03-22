const express = require("express"); //tells the file to use express so we can have express features available in the variable
const cors = require("cors"); //allows us to do cross-origin-resource-sharing so that this api can send and recieve data to external sources
const mongoose = require('mongoose')
const port = 8000;
const app = express(); //create a variable call app that is going to be an instance of an express server. We have express features available in the variable "app"
app.use(cors());
app.use(express.json());



require("./server/config/quotes.config")
require("./server/routes/quote.routes")(app)

// const Quote = require("./server/models/Quote.model")






// app.get("/api", (req, res)=>{
//     res.json({status: "hellooo quotes api with mongoose and maybe fullstack? nahhhh thats monday!"})
// })

// app.get("/api/allQuotes", (req, res)=>{
//     Quote.find()
//     .then(allQuotes => res.json({results: allQuotes}) )
//     .catch()
// })





app.listen(port, () => console.log(`Listening on port ${port}`));