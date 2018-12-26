const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
    accountID:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        required: true,
    },
    registerday:{
        type: Date,
        required: true
    },
    numberOfTrips:{
        type: Number,
        required: true
    }
})

module.exports = user = mongoose.model('passenger',PassengerSchema);