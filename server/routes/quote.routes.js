const QuoteController = require("../controllers/quote.controller")

module.exports = app => {
    app.get("/api/quotes/all", QuoteController.findAllQuotes)
    app.post("/api/quotes/create", QuoteController.createOneQuote)
    app.get("/api/quotes/random", QuoteController.randomQuote)
    app.get("/api/quotes/quoteid", QuoteController.findAQuote)
    app.put("/api/quotes/update/:quoteid", QuoteController.updateAQuote)
    app.delete("/api/quotes/delete/:quoteid", QuoteController.deleteQuote)
}




// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }