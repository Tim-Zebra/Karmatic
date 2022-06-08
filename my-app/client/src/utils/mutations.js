import { gql } from '@apollo/client';

// Creates user *************NOT DONE******************************
export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    username
    email
    password
  }
}
`;

// Logs in user
export const LOGIN_USER = gql`
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      username
      password
    }
  }
}
`;
