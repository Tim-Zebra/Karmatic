const { gql } = require('apollo-server-express');
// Location refers to the neighborhood or community a user/karmapost is part of. Address, property of karmpost, refers to the specific address that help is required at
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    karma: Int
    karmaPosts: [KarmaPost]
    karmaHelping: [KarmaPost]
  }

  type KarmaPost {
    _id: ID!
    postAuthor: String!
    postTitle: String!
    postDescription: String!
    postValue: Int!
    duration: Int!
    difficulty: String!
    address: String!
    complete: Boolean!
    createdAt:String
    karmaHelpers: [KarmaHelper]
  }

  type KarmaHelper {
    _id: ID!
    helperUsername: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    users: [User]
    allKarmaPosts: [KarmaPost]
    karmaPost(_id: ID!): KarmaPost
    karmaPosts(username: String!): [KarmaPost]
    karmaHelpers: [KarmaPost]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!) : Auth
    changeKarma(username: String!, karma: Int!) : User
    login(username: String!, password: String!) : Auth
    createPost(username: String!, postTitle: String!, postDescription: String!, postValue: Int!, duration: Int!, difficulty: String!, address: String!) : KarmaPost
    editPost(karmaPostId: ID!, postTitle: String, postDescription: String, postValue: Int, duration: Int, difficulty: String, address: String) : KarmaPost
    editPostComplete(karmaPostId: ID!) : KarmaPost
    deletePost(karmaPostId: ID!) : KarmaPost
    addHelper(karmaPostId: ID!) : KarmaPost
    removeHelper(karmaPostId: ID!) : KarmaPost

  }
`;

module.exports = typeDefs;