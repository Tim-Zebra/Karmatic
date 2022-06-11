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
mutation CreatePost($username: String!, $postTitle: String!, $postDescription: String!, $postValue: Int!, $duration: Int!, $difficulty: String!, $address: String!) {
  createPost(username: $username, postTitle: $postTitle, postDescription: $postDescription, postValue: $postValue, duration: $duration, difficulty: $difficulty, address: $address) {
    _id
    postAuthor
    postTitle
    postDescription
    postValue
    difficulty
    duration
    address
    createdAt
  }
}
`;

// Add the logged in user as a helper
export const ADD_HELPER = gql`
mutation addHelper($karmaPostId: ID!) {
  addHelper(karmaPostId: $karmaPostId) {
    _id
  }
}
`;

export const EDIT_POST = gql`
mutation editPost($karmaPostId: ID!, $postTitle: String, $postDescription: String, $postValue: Int, $duration: Int, $difficulty: String, $address: String) {
  editPost(karmaPostId: $karmaPostId, postTitle: $postTitle, postDescription: $postDescription, postValue: $postValue, duration: $duration, difficulty: $difficulty, address: $address) {
    _id
  }
}
`
// Deletes a post
export const DELETE_POST = gql`
mutation deletePost($karmaPostId: ID!) {
  deletePost(karmaPostId: $karmaPostId) {
    _id
  }
}
`;
