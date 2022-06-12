const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const karmaPostSchema = new Schema({
  postTitle: {
    type: String,
    required: 'You need to write a title!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postDescription: {
    type: String,
    required: 'You need to write a description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },  
  postValue: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  karmaHelpers: [
    {
      helperUsername: {
        type: String,
        required: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],

});

const KarmaPost = model('KarmaPost', karmaPostSchema);

module.exports = KarmaPost;