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
  // members: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'User',
  //   }
  // ]
  // Note from Tim: Only using to hold a list of user names. Since all user names are unique, we can use this array to match specific user name as we don't need any other user info at this time.
  members: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
  ],
  karmaPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'KarmaPost',
    }
  ]
});

const Location = model('Location', locationSchema);

module.exports = Location;