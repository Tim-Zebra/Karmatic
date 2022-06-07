const { AuthenticationError } = require('apollo-server-express');
const { User, KarmaPost, Location } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({}).populate('karmaPosts').populate('karmaHelping').populate('karmaGroups');
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
    // create user verison with json web tokens for login
    // createUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user)
    //   return {token, user};
    // Login mutation ready, commented out for when front-end needs it
    // },
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
          { $addToSet: {karmaPosts: karmaPost.id}},
          {new: true}
        );

        return karmaPost;
        },
    editPost: async (parent, {_id, postTitle, postDescription, duration, difficulty}) => {
      return KarmaPost.findOneAndUpdate(
        {_id},
        {postTitle, postDescription, duration, difficulty},
        {new: true}
      )
        },
    deletePost: async (parent, {_id, username}) => {
      const karmaPost = await KarmaPost.findOneAndDelete({
        _id: _id
      },
      {new: true});

      await User.findOneAndUpdate(
        { username: username},
        { $pull: { karmaPosts: karmaPost.id}},
        {new: true}
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