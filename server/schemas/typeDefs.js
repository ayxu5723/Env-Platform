const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    comments: [Comment]
  }

  type EnvOrg {
    _id: ID
    name: String!
    email: String!
    address: String
    announcements: [Announcement]
  }

  type Announcement {
    _id: ID
    announcementText: String!
  }

  type Donation {
    _id: ID
    donationAmount: Float!
  }

  type Comment {
    _id: ID
    commentText: String!
  }

  type userAuth {
    token: ID!
    user: User
  }

  type orgAuth {
    token: ID!
    org: EnvOrg
  }

  type Query {
    me: User
    user(userId: ID!): User
    envorgs: [EnvOrg]
    envorg(_id: ID!): EnvOrg!
    announcements: [Announcement]!
    announcement: (_id: ID!): Announcement!
    comments: [Comment]!
    comment: (_id: ID!): Comment!
    
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String!): userAuth
    userLogin(email: String!, password: String!): userAuth
    createEnvOrg(name: String!, password: String!, email: String!): orgAuth
    orgLogin(email: String!, password: String!): orgAuth
    createAnnouncement(announcementText: String!): Announcement
    updateAnnouncement(_id: ID!, announcementText: String!): Announcement
    deleteAnnouncement(_id:ID!): Announcement
    createComment(commentText: String!): Comment
    updateComment(_id: ID!, newcommentText: String!): Comment
    deleteComment(_id: ID!): Comment
  }

  type Subscription{
    updateDonation(donationAmount: Float!): Donation
  }
`;

module.exports = typeDefs;
