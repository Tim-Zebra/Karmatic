import { gql } from '@apollo/client';

// Creates user ** DONE **
export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

// Logs in user ** DONE**
export const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

// Create Post
export const CREATE_POST = gql`
mutation CreatePost($username: String!, $postTitle: String!, $postDescription: String!, $duration: Int!, $difficulty: String!, $address: String!) {
  createPost(username: $username, postTitle: $postTitle, postDescription: $postDescription, duration: $duration, difficulty: $difficulty, address: $address) {
    _id
    postTitle
  }
}
`;

// Add the logged in user as a helper
export const ADD_HELPER = gql`
mutation ADD_HELPER($postId = ID!) {
  addHelper(_id: $postId) {
    _id
    karmaHelpers {
      _id
      helperUsername
    }
  }
}
`;

