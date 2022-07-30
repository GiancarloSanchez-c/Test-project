const { Schema, model } = require('mongoose');

const DivisionsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 45,
  },
  higher: {
    type: String,
  },
  collaborators: {
    type: Number,
    min: 0,
    default: 0,
  },
  level: {
    type: Number,
    default: 0,
  },
  subDivisions: [
    {
      type:Schema.Types.ObjectId,
      ref: 'SubDivisions',
    }
  ],
  ambassadors: [
    {
      type:Schema.Types.ObjectId,
      ref:"User"
    }
  ]
})

module.exports = model('Divisions', DivisionsSchema);