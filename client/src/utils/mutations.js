import { gql } from '@apollo/client';


export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_ANNOUNCEMENT = gql`
  mutation createAnnouncement($announcementText: String!) {
    addAnnouncement(announcementText: $announcementText) {
      _id
      announcementText
      username
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation createComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      username
      createdAt
    }
  }
`;