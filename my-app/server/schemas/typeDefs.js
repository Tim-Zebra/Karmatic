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

  type Member {
    member: String!
  }

  type Location {
    _id: ID!
    locationName: String!
    locationGeoTag: String!
    members: [Member]
  }

  type Query {
    users: [User]
    user(username: String!): User
    karmaPost(_id: ID!): KarmaPost
    karmaPosts(username: String!): [KarmaPost]
    karmaHelping: [KarmaPost]
    karmaGroups: [Location]
    location(_id: ID!): Location
    locations: [Location]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!) : User
    changeKarma(username: String!, karma: Int!) : User
    createPost(username: String!, postTitle: String!, postDescription: String!, postAuthor: String!, duration: Int!, difficulty: String!) : KarmaPost
    addHelper(_id: ID!, helperUsername: String!) : KarmaPost
    createLocation(locationName: String!, locationGeoTag: String!) : Location
    addMember(_id: ID!, member: String!) : Location
  }
`;

module.exports = typeDefs;