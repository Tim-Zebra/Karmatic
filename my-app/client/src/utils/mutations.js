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
`
