/** packages */

const mongoose = require("mongoose");

/** Schema creation */

const petSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  dateOfBirth: {
    type: "String",
    required: true,
  },
  gender: {
    type: "String",
    required: true,
  },
  color: {
    type: "String",
    required: true,
  },
  weight: {
    type: "Number",
    required: true,
  },
  feeding: {
    type: "String",
    required: true,
  },
  contactInformation: {
    type: "String",
    required: true,
  },
  breed_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coll_pet",
    required: true,
  },
});

/** Schema exportation */
module.exports = petSchema;
