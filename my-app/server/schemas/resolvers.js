const { AuthenticationError } = require('apollo-server-express');
const { User, KarmaPost } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Finds user based off the jwt context
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('karmaPosts').populate('karmaHelping');
      }
      throw new AuthenticationError('You are not logged in!');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('karmaPosts').populate('karmaHelping');
    },
    users: async () => {
      return User.find({}).populate('karmaPosts').populate('karmaHelping');
    },
    allKarmaPosts: async (parent, args) => {
      return KarmaPost.find({}).populate('karmaHelpers');
    },
    karmaPosts: async (parent, {username}) => {
      return KarmaPost.find({ username }).populate('karmaHelpers');
    },
    karmaPost: async (parent, { _id }) => {
      return KarmaPost.findOne({ _id }).populate('karmaHelpers');
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect login information');
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect login information')
      }

      const token = signToken(user);

      return { token, user };
    },
    // Should be changed to use user id
    changeKarma: async (parent, { username, karma }) => {
      return User.findOneAndUpdate(
        { username },
        { karma: karma },
        { new: true }
      );
    },
    // postValue is a placeholder, needs to be calculated based on duration and difficulty. Needs tokens to be able to use context. This is the version that uses context, commented out so we can test creating a post
    createPost: async (parent, {username, postTitle, postDescription, postValue, duration, difficulty, address }, context) => {
      // context.user authentication commented out for now for testing. username above should be removed when context is being used. context should also be replaced under user.findoneandupdate and postAuthor
      const karmaPost = await KarmaPost.create({
        postTitle,
        postDescription,
        postAuthor: username,
        postValue,
        duration,
        difficulty,
        address,
      })

      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { karmaPosts: karmaPost._id } }
      );
      return karmaPost;
    },
    // editPost creates the variable userposts to hold the array of karmapost ids for the logged in user. If the id of the post to be edited is included in the array of this user's karmaposts, it updates the post
    editPost: async (parent, { karmaPostId, postTitle, postDescription, postValue, duration, difficulty, address }, context) => {

        return KarmaPost.findOneAndUpdate(
          { _id: karmaPostId },
          { postTitle, postDescription, postValue, duration, difficulty, address },
          { new: true }
        )
    },
    // This creates the variable userposts to hold the array of karmapost ids for the logged in user. If the id of the post to be deleted is included in the array of this user's karmaposts, it deletes the post and updates the user to remove that object id from the user karmaposts array, otherwise it throws an error
    deletePost: async (parent, { _id }, context) => {
      const userposts = context.user.karmaPosts;
      if (userposts.includes(_id)) {
        const karmaPost = await KarmaPost.findOneAndDelete({
          _id: karmaPostId
        });
  
        const updateAuthor = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { karmaPosts: karmaPost._id } },
          { new: true });

        karmaPost.karmaHelpers.map(async (karmaHelpers) => {
          const updatedHelper = await User.findOneAndUpdate(
            { username: karmaHelpers.helperUsername },
            { $pull: { karmaHelping: karmaPost._id } },
            { new: true });
        });

        return;
      }
      throw new AuthenticationError('You do not have permission to delete this post!')
    },
    addHelper: async (parent, { karmaPostId }, context) => {
      // Checks if the context is a user
      if(context.user) {
        // Updates username in KarmaPost's karmaHelpers array
        const karmaPost = await KarmaPost.findOneAndUpdate(
          { _id: karmaPostId },
          { $addToSet: { karmaHelpers: {helperUsername: context.user.username} } },
          { new: true })

        // Updates User's karmaHelping array
        const userUpdate = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { karmaHelping: karmaPost._id } },
          { new: true });
          return;
      };
        
      throw new AuthenticationError('You are not logged in!');
    },
  },
};

module.exports = resolvers;