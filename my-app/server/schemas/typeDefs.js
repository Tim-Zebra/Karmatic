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
    location(locationId: ID!): Location
    locations: [Location]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!)
    changeKarma(username: String!, karma: Int!) : User
    createPost(username: String!, postTitle: String!, postDescription: String!, postAuthor: String!, duration: Int!, difficulty: String!)
    addHelper(karmaPostId: ID!, helperUsername: String!)
    createLocation(locationName: String!, locationGeoTag: String!)
    addMember(locationId: ID!, memberId: ID!)
  }
`;

module.exports = typeDefs;