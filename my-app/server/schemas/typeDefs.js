const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    karma: Int
    karmaPosts: [KarmaPost]
    karmaHelping: [KarmaPost]
    karmaGroups: [Location]
  }

  type KarmaPost {
    _id: ID!
    postTitle: String!
    postDescription: String!
    postValue: Int!
    duration: Int!
    difficulty: String!
    createdAt:String
    karmaHelpers: [KarmaHelper]
  }

  type KarmaHelper {
    _id: ID!
    helperUsername: String!
    createdAt: String!
  }

  type Location {
    _id: ID!
    locationName: String!
    locationGeoTag: String!
    members: [User]
  }

  type Query {
    users: [User]
    user(username: String!): User
    karmaPost(karmaPostId: ID!): KarmaPost
    karmaPosts(username: String!): [KarmaPost]
    karmaHelping: [KarmaPost]
    karmaGroups: [Location]
    members: [User]
  }
`;

module.exports = typeDefs;

// type User {
//   _id: ID!
//   name: String!
// }

// type Matchup {
//   _id: ID!
//   tech1: String!
//   tech2: String!
//   tech1_votes: Int
//   tech2_votes: Int
// }

// type Query {
//   tech: [Tech]
//   matchups(_id: String): [Matchup]
// }

// type Mutation {
//   createMatchup(tech1: String!, tech2: String!): Matchup
//   createVote(_id: String!, techNum: Int!): Matchup
// }