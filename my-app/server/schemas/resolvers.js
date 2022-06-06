const { AuthenticationError } = require('apollo-server-express');
const { User, KarmaPost, Location } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('KarmaPosts').populate('KarmaHelping').populate('KarmaGroups');
    },
    karmaPosts: async (parent, {username}) => {
      return KarmaPost.find({ username });
    },
    karmaPost: async (parent, {karmaPostId }) => {
      return KarmaPost.findOne({ karmaPostId });
    },
    locations: async () => {
      return Location.find({});
    },
    location: async (parent, {locationId}) => {
      return Location.findOne({ locationId}).populate('members');
    }
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    changeKarma: async (parent, { username, karmaAmt }) => {
      return User.findOneAndUpdate(
        { username },
        {karma: karmaAmt},
        { new: true }
      );
    },
    // postValue is a placeholder, needs to be calculated based on duration and difficulty. Needs tokens to be able to use context
    createPost: async (parent, { postTitle, postDescription, duration, difficulty}, context) => {
      if (context.user) {
        const postValue = 100;
        const karmaPost = await KarmaPost.create({ 
          postTitle, 
          postDescription, 
          postAuthor: context.user.username,
          postValue: postValue, 
          duration, 
          difficulty})

        await User.findOneAndUpdate(
          { username: context.user.username},
          { $addToSet: {karmaPosts: karmaPost.id}}
        );

        return karmaPost;
        }
        // Needs auth util/tokens
        throw new AuthenticationError('You need to be logged in!')
      }

  },
};

module.exports = resolvers;