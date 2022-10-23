import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      commentCount {
        commentText
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
        commentCount {
          commentText
        }
      }
    }
  `;

export const QUERY_ANNOUNCEMENTS = gql`
query announcements {
  announcements {
    announcementText
      commentCount {
        commentText
      }
    }
  }
`;
