import { gql } from '@apollo/client';

// Gets logged in user info
// This pulls everything excluding password
export const GET_ME = gql`
query GET_ME {
  users {
    _id
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
query GET_USERS {
  users {
    _id
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
