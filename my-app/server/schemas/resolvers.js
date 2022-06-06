const { User, KarmaPost, Location } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
  },
  // Mutation: {
  //   createPost: async (parent, args) => {
  //     const post = await post.create(args);
  //     return post;
  //   },
  //   changeKarma: async (parent, { _id, karma }) => {
  //     const vote = await User.findOneAndUpdate(
  //       { _id },
  //       {karma: $karma},
  //       { new: true }
  //     );
  //     return vote;
  //   },
  // },
};

module.exports = resolvers;
