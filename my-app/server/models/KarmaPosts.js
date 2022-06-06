const { Schema, model } = require('mongoose');

const karmaPostSchema = new Schema({
  karmaPost: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  karmaAuthor: {
    type: String,
    required: true,
    trim: true,
  },  
  karmaValue: {
    type: Number,
    required: true,
  },
    createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  karmaHelpers: [
    {
      helperUsername: {
        type: String,
        required: true,
        trim: true,
      },
      helperKarma: {
        type: Number,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],

});

const KarmaPost = model('KarmaPosts', karmaPostSchema);

module.exports = KarmaPost;