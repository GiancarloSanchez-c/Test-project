const { Schema, model } = require('mongoose');


const SubDivisionsSchema = new Schema({
  name: {
    type: String,
  },
})

module.exports = model('SubDivisions', SubDivisionsSchema);