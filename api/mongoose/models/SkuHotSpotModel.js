const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    skuId: {
        type: String,
        trim: true,
        required: [true, 'SKU id missing or empty'],
        unique: true
    },
    projectId: {
        type: String,
        trim: true,
        required: [true, 'project id missing or empty']
    },
    totalNumberOfHotSpots: {
        type: Number,
        default: 0,
        required: [true, 'total number of hotspots property is required']
    }
});


//module.exports  = HotSpotModel = mongoose.model('hotspots', HotSpotSchema);
