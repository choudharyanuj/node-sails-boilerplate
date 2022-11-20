// model for pre stored data

const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    category: {type: String, required: true},
    sub_category: [{
        name: {type: String, required: true},
        angle: {type: Number, required: true},
        lr_src: {type: String, required: true},
        hr_src: {type: String, required: true}
    }],
    bg: [{
        name: {type: String, required: true},
        lr_src: {type: String, required: true},
        hr_src: {type: String, required: true}
    }]
});