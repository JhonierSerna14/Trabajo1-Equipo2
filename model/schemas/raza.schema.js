/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */

const breedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  geographicalOrigin: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    required: true,
  },
  lifeExpectancy: {
    type: String,
    required: true,
  },
  habitat: {
    type: String,
    required: true,
  },
});

/** Schema exportation */
module.exports = breedSchema;
