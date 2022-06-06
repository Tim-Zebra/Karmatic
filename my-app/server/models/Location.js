const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  locationName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  locationGeoTag: {
    type: String,
    required: true,
  },
  members: [
    {
      memberName: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],
});

const Location = model('Location', locationSchema);

module.exports = Location;