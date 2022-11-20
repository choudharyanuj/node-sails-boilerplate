const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    imageId: {
        type: String,
        trim: true,
        required: [true, 'hotspot linked image id missing or empty']
    },
    isHidden : {
        type: Boolean,
        default: false,
    },
    hotSpotArray : [
        {
            hotSpotId : {
                type: String,
                trim: true,
                required: [true, 'hotspotid missing or empty']
            },
            isHidden : {
                type: Boolean,
                default: false
            },
            coordinates: {
                xAxis: {
                    type: Number,
                    min: [0, 'xAxis property cannot be -ve'],
                    required: [true, 'xAxis property missing']
                },
                yAxis: {
                    type: Number,
                    min: [0, 'yAxis property cannot be -ve'],
                    required: [true, 'yAxis property missing']
                }
            },
            hotSpotIconSrc : {
                type: String,
                trim: true,
                required: [true, 'icon src missing']
            },
            hotSpotDesc: {
                type: String,
                trim: true,
            },
            hotSpotURL: {
                type: String,
                trim: true,
            },
            hotSpotTitle: {
                type: String,
                trim: true,
            },
            hotSpotCloseUpURL: {
                type: String,
                trim: true,
            },
            timeStamp: {
                createdOn: {
                    type: Date,
                    default: Date.now(),
                    required: true
                },
                updatedOn: {
                    type: Date,
                    default: Date.now(),
                    require: true
                }
            }
        }
    ]
});


//module.exports  = HotSpotModel = mongoose.model('hotspots', HotSpotSchema);
