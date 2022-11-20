// model schema for storing data

const mongoose = require('mongoose');

let angleWiseSubCatDataSchema = new mongoose.Schema({
  lrSrc: {
    type: String
  },
  hrSrc: { type: String, required: true },
  subCategoryPosData: [{
    name: { type: String, required: true },
    src: { type: String, required: true },
    angle: { type: Number, required: true },
    leftMargin: { type: Number, required: true },
    bottomMargin: { type: Number, required: true },
    width: { type: Number, required: true },
    aspectRatio: { type: Number, required: true },
    posAngle: {type: Number}
  }],
});
 
module.exports = new mongoose.Schema({
  bgName: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  0: angleWiseSubCatDataSchema,
  45: angleWiseSubCatDataSchema,
  90: angleWiseSubCatDataSchema,
});
