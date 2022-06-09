const { AuthenticationError } = require('apollo-server-express');
const { User, KarmaPost, Location } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        return User.findOne({ _id: context.user._id }).populate('karmaPosts').populate('karmaHelping').populate('karmaGroups');
      }
      throw new AuthenticationError('You are not logged in!');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('karmaPosts').populate('karmaHelping').populate('karmaGroups');
    },
    users: async () => {
      return User.find({}).populate('karmaPosts').populate('karmaHelping').populate('karmaGroups');
    },
    karmaPosts: async (parent, {username}) => {
      return KarmaPost.find({ username }).populate('location');
    },
    karmaPost: async (parent, {_id }) => {
      return KarmaPost.findOne({ _id }.populate('location'));
    },
    locationKarmaPosts: async (parent, {_id}) => {
      return KarmaPost.find({ location });
    },
    locations: async () => {
      return Location.find({}).populate('members');
    },
    location: async (parent, {_id}) => {
      return Location.findOne({ _id}).populate('members').populate('karmaPosts');
    }
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
    createPost: async (parent, {username, postTitle, postDescription, duration, difficulty, address, location}, context) => {
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
          address,
          location})

        await User.findOneAndUpdate(
          { username: username},
          { $addToSet: {karmaPosts: karmaPost.id}}
        );

        await Location.findOneAndUpdate(
          { _id: karmaPost.location},
          { $addToSet: {karmaPosts: karmaPost._id}}
        )
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

      await Location.findOneAndUpdate(
        { _id: karmaPost.location},
        { $pull: {karmaPosts: karmaPost.id}}
      )
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
    createLocation: async (parent, args) => {
      const location = await Location.create(args)
      return location
    },
    addMember: async (parent, {_id, member}) => {
      console.log('member', member)
      return Location.findOneAndUpdate(
        {_id},
        { $addToSet: {members: {member}}},
        { new: true}
      )
    }
  },
};

module.exports = resolvers;