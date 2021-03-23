const mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
    quotedBy: {
        type: String,
        required: [true, "Quoted By needs to be filled out!"]
    },
    content: {
        type: String,
        required: [true, "WEEE NEED CONTENT!"]
    },
    quotedOn: {
        type: Date,
        required: [true, "When tho? When was this said?"]
    }

})

const Quote = mongoose.model("Quote", QuoteSchema)

module.exports = Quote;

