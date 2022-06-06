const { Schema, model } = require('mongoose');

const karmaPostSchema = new Schema({
  postTitle: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postDescription: {
    type: String,
    required: 'You need to leave a thought!',
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
    createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  karmaHelpers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  // karmaHelpers: [
  //   {
  //     helperUsername: {
  //       type: String,
  //       required: true,
  //       trim: true,
  //     },
  //     helperKarma: {
  //       type: Number,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],

});

const KarmaPost = model('KarmaPosts', karmaPostSchema);

module.exports = KarmaPost;