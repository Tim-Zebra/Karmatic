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
      return KarmaPost.find({ username });
    },
    karmaPost: async (parent, {_id }) => {
      return KarmaPost.findOne({ _id });
    },
    locations: async () => {
      return Location.find({});
    },
    location: async (parent, {_id}) => {
      return Location.findOne({ _id}).populate('members');
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
        throw new AuthenticationError('You need to be logged in!')
      },
      // verison of createPost that does not use context in case it's needed for testing
    // createPost: async (parent, {username, postTitle, postDescription, duration, difficulty}) => {
    //     const postValue = 100;
    //     const karmaPost = await KarmaPost.create({ 
    //       postTitle, 
    //       postDescription, 
    //       postAuthor: username,
    //       postValue: postValue, 
    //       duration, 
    //       difficulty})

    //     await User.findOneAndUpdate(
    //       { username: username},
    //       { $addToSet: {karmaPosts: karmaPost.id}},
    //       {new: true}
    //     );

    //     return karmaPost;
    //     },
    editPost: async (parent, {_id, postTitle, postDescription, duration, difficulty}) => {
      if (context.user) {
      return KarmaPost.findOneAndUpdate(
        {_id},
        {postTitle, postDescription, duration, difficulty},
        {new: true}
      )
      }
      throw new AuthenticationError('You need to be logged in!')
        },
    deletePost: async (parent, {_id, username}) => {
      if (context.user) {
      const karmaPost = await KarmaPost.findOneAndDelete({
        _id: _id
      },
      {new: true});

      await User.findOneAndUpdate(
        { username: username},
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
    createLocation: async (parent, args) => {
      const location = await Location.create(args)
      return location
    },
    addMember: async (parent, {_id, member}) => {
      return Location.findOneAndUpdate(
        {_id},
        { $addToSet: {members: {member}}},
        { new: true}
      )
    }
  },
};

module.exports = resolvers;