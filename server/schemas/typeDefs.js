const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]!
    announcements: [Announcement]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Announcement {
    _id: ID
    announcementText: String!
    username: String!
    createdAt: String
    comments: [Comment!]!
  }

  type Donate {
    session: ID
  }

  type Donation {
    _id: ID
    donationAmount: Float!
  }

  type Comment {
    _id: ID
    commentText: String!
    username: String!
    createdAt: String
  }
  
  type Query {
    users: [User]!
    user(username: String!): User
    me: User
    announcements: [Announcement!]!
    announcement (announcementId: ID!): Announcement
    comments: [Comment!]!
    comment(commentId: ID!): Comment
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createAnnouncement(announcementText: String!): Announcement
    updateAnnouncement(announcementId: ID!, announcementText: String!): Announcement
    deleteAnnouncement(announcementId: ID!): Announcement
    createComment(commentText: String!): Comment
    updateComment(userId: ID!, newcommentText: String!): Comment
    deleteComment(announcementId: ID!): Comment
  }

  # type Subscription{
  #   updateDonation(donationAmount: Float!): Donation
  # }
`;

module.exports = typeDefs;
