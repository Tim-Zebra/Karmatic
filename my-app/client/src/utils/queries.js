import { gql } from '@apollo/client';

// Gets logged in user info
export const GET_ME = gql`
query me {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      authors
      title
      description
      bookId
      image
      link
      title
    }
  }
}
`;

// Queryies a specific user **************NOT DONE**********************
export const QUERY_USER = gql`
query User {
  user {
    _id
    username
  }
}
`;

// Queries all users **************NOT DONE**********************
export const QUERY_USERS = gql`
query Users {
  users {
    _id
    username
  }
}
`;
