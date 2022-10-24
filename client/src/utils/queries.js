import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      announcements {
        _id
        announcementText
        createdAt
      }

    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    user{
      username
      email
      announcements {
        _id
        announcementText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
        _id
        username
        email
        announcements {
          _id
          announcementText
          createdAt
        }

      }
    }
  `;

export const QUERY_ANNOUNCEMENTS = gql`
query announcements {
  announcements {
    _id
    announcementText
    username
    createdAt
    }
  }
`;

export const QUERY_SINGLE_ANNOUNCEMENT = gql`
  query announcement($announcementId: ID!) {
    announcement(announcementId: $announcementId) {
      _id
      announcementText
      username
      createdAt
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
query comments {
  comments {
    _id
    commentText
    username
    createdAt
    }
  }
`;


export const QUERY_COMMENT = gql`
query comment($commentId: ID!) {
  comment (commentId: $commentId) {
    _id
    commentText
    username
    createdAt
    }
  }
`;