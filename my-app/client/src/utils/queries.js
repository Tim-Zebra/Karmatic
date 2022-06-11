import { gql } from '@apollo/client';

// Gets logged in user info
// This pulls everything for current user excluding password
// **TIMS WORK - IN PROGRESS**
export const GET_ME = gql`
query Me {
  me {
    _id
    username
    email
    karma
    karmaPosts {
      _id
      postTitle
      postAuthor
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
      postAuthor
      postTitle
      postValue
      address
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
      complete
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
      complete
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

// Queries karma for all users
export const GET_USERS_KARMA = gql`
query getUserKarma {
  users {
    username
    karma
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

export const GET_ALL_KARMAPOSTS = gql`
query GET_ALL_KARMAPOSTS {
  allKarmaPosts {
    _id
    postAuthor
    postTitle
    postDescription
    postValue
    duration
    difficulty
    address
    complete
    createdAt
    karmaHelpers {
      _id
      helperUsername
      createdAt
    }
  }
}
`;