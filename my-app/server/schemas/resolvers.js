const { AuthenticationError } = require('apollo-server-express');
const { User, KarmaPost, Location } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('karmaPosts').populate('karmaHelping').populate('karmaGroups');
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
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    changeKarma: async (parent, { username, karma }) => {
      return User.findOneAndUpdate(
        { username },
        {karma: karma},
        { new: true }
      );
    },
    // postValue is a placeholder, needs to be calculated based on duration and difficulty. Needs tokens to be able to use context. This is the version that uses context, commented out so we can test creating a post
    // createPost: async (parent, { postTitle, postDescription, duration, difficulty}, context) => {
    //   if (context.user) {
    //     const postValue = 100;
    //     const karmaPost = await KarmaPost.create({ 
    //       postTitle, 
    //       postDescription, 
    //       postAuthor: context.user.username,
    //       postValue: postValue, 
    //       duration, 
    //       difficulty})

    //     await User.findOneAndUpdate(
    //       { username: context.user.username},
    //       { $addToSet: {karmaPosts: karmaPost.id}}
    //     );

    //     return karmaPost;
    //     }
    //     // Needs auth util/tokens
    //     throw new AuthenticationError('You need to be logged in!')
    //   }
    createPost: async (parent, {username, postTitle, postDescription, duration, difficulty}) => {
        const postValue = 100;
        const karmaPost = await KarmaPost.create({ 
          postTitle, 
          postDescription, 
          postAuthor: username,
          postValue: postValue, 
          duration, 
          difficulty})

        await User.findOneAndUpdate(
          { username: username},
          { $addToSet: {karmaPosts: karmaPost.id}}
        );

        return karmaPost;
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