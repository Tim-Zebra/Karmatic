import { gql } from '@apollo/client';

// Gets logged in user info
// This pulls everything for current user excluding password
export const GET_ME = gql`
query me {
  me {
    username
    email
    karma
  }
}
`;

// Queryies a specific user -- gets everything but email and password
export const GET_USER = gql`
query GET_USER($username: String!) {
  user(username: $username) {
    _id
    username
    karma
    karmaPosts {
      _id
      postTitle
      postDescription
      postValue
      duration
      difficulty
      createdAt
      karmaHelpers {
        _id
        helperUsername
        createdAt
      }
    }
    karmaHelping {
      _id
      postTitle
      postDescription
      postValue
      duration
      difficulty
      createdAt
      karmaHelpers {
        _id
        helperUsername
        createdAt
      }
    }
    karmaGroups {
      _id
      locationName
      locationGeoTag
      members {
        member
      }
    }
  }
}
`;

// Queries all users except password
export const GET_USERS = gql`
query Users {
  users {
    username
    email
    karma
    karmaPosts {
      _id
      postTitle
      postDescription
      postValue
      duration
      difficulty
      address
      createdAt
      karmaHelpers {
        _id
        helperUsername
        createdAt
      }
    }
    karmaHelping {
      _id
      postTitle
      postDescription
      postValue
      duration
      difficulty
      address
      createdAt
      karmaHelpers {
        _id
        helperUsername
        createdAt
      }
    }
  }
}
`;

export const USER_KARMA_POSTS = gql`
query Me {
  me {
    _id
    username
    karmaGroups {
      _id
      locationName
      locationGeoTag
      karmaPosts {
        _id
        postTitle
        postDescription
        postValue
        duration
        difficulty
        address
        createdAt
        karmaHelpers {
          _id
          helperUsername
          createdAt
        }
      }
    }
  }
}
`;