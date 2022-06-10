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
mutation Mutation($postAuthor: String!, $duration: Int!, $difficulty: String!, $address: String!, $postDescription: String!, $postTitle: String!, $username: String!) {
  createPost(postAuthor: $postAuthor, duration: $duration, difficulty: $difficulty, address: $address, postDescription: $postDescription, postTitle: $postTitle, username: $username) {
    postTitle
    postDescription
    postValue
    duration
    difficulty
    address
    createdAt
  }
}
`
