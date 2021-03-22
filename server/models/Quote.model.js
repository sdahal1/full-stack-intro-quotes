const mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
    quotedBy: {
        type: String
    },
    content: {
        type: String
    },
    quotedOn: {
        type: Date
    }

})

const Quote = mongoose.model("Quote", QuoteSchema)

module.exports = Quote;

