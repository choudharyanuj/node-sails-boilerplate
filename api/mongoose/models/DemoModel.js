const mongoose = require("mongoose");


module.exports = new mongoose.Schema({

    package: { type: mongoose.ObjectId, required: true },
    thumbnail: {
        uri: String,
        key: String
    },
    location: { type: mongoose.ObjectId, required: true },
    images: [
        {
            uri: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            name: {
                type: String,

            }
        }

    ],
    imagesMobile: [
        {
            uri: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            name: {
                type: String,

            }
        }

    ],
    price: {
        type: Number,
        required: true
    },
    overview: { type: String, },
    category:{
        type:String
    },
    areasToBeCovered: [
        { type: String}
    ],
    deliverables: [
        { type: String,  }
    ],
    reasons: [
        { type: String, }
    ],
    itinerary: [{
        time: { type: String, required: true },
        toDo: { type: String, required: true }
    }],
    storiesBehindTour: {
        type: String,
        
    },

})