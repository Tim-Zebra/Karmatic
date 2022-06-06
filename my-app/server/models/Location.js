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
  // Note from Ryan: I made members reference the User model since they should connect rather than making new objects
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ]
  // members: [
  //   {
  //     memberName: {
  //       type: String,
  //       required: true,
  //       trim: true,
  //     },
  //   },
  // ],
});

const Location = model('Location', locationSchema);

module.exports = Location;