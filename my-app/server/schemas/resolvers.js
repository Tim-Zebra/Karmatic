const { AuthenticationError } = require('apollo-server-express');
const { User, KarmaPost } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        return User.findOne({ _id: context.user._id }).populate('karmaPosts').populate('karmaHelpers');
      }
      throw new AuthenticationError('You are not logged in!');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('karmaPosts').populate('karmaHelpers');
    },
    users: async () => {
      return User.find({}).populate('karmaPosts').populate('karmaHelpers');
    },
    karmaPosts: async (parent, {username}) => {
      return KarmaPost.find({ username }).populate('karmaHelpers');
    },
    karmaPost: async (parent, {_id }) => {
      return KarmaPost.findOne({ _id }).populate('karmaHelpers');
    },
  },

  Mutation: {
    createUser: async (parent, {username, email, password}) => {
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
    changeKarma: async (parent, { username, karma }) => {
      return User.findOneAndUpdate(
        { username },
        {karma: karma},
        { new: true }
      );
    },
    // postValue is a placeholder, needs to be calculated based on duration and difficulty. Needs tokens to be able to use context. This is the version that uses context, commented out so we can test creating a post
    createPost: async (parent, {username, postTitle, postDescription, duration, difficulty, address}, context) => {
      // context.user authentication commented out for now for testing. username above should be removed when context is being used. context should also be replaced under user.findoneandupdate and postAuthor
      // if (context.user) {
        const postValue = 100;
        const karmaPost = await KarmaPost.create({ 
          postTitle, 
          postDescription, 
          postAuthor: username,
          postValue: postValue, 
          duration, 
          difficulty,
          address,})

        await User.findOneAndUpdate(
          { username: username},
          { $addToSet: {karmaPosts: karmaPost.id}}
        );
        return karmaPost;
        // uncomment the following two lines when activating context
        // }
        // throw new AuthenticationError('You need to be logged in!')
      },
    editPost: async (parent, {_id, postTitle, postDescription, duration, difficulty, address}) => {
      if (context.user) {
      return KarmaPost.findOneAndUpdate(
        {_id},
        {postTitle, postDescription, duration, difficulty, address},
        {new: true}
      )
      }
      throw new AuthenticationError('You need to be logged in!')
        },
    deletePost: async (parent, {_id}) => {
      if (context.user) {
      const karmaPost = await KarmaPost.findOneAndDelete({
        _id: _id
      },
      );

      await User.findOneAndUpdate(
        { username: context.user.username},
        { $pull: { karmaPosts: karmaPost.id}},
        {new: true}
      );
      return karmaPost; }
      throw new AuthenticationError('You need to be logged in!')
    },
    addHelper: async (parent, {_id, helperUsername}) => {
      return KarmaPost.findOneAndUpdate(
        {_id},
        { $addToSet: {karmaHelpers: {helperUsername}}},
        { new: true }
      )
    },
  },
};

module.exports = resolvers;