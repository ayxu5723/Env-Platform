const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    comments: [Comment!]!
  }

  type EnvOrg {
    _id: ID!
    name: String!
    email: String!
    address: String
    announcements: [Announcement!]!
  }

  type Announcement {
    announcementText: String!
  }

  type Donation {
    donationAmount: Float!
  }

  type Comment {
    commentText: String!
  }

  type Query {
    envorgs: [EnvOrg!]!
    envorg(_id: ID!): EnvOrg!
    announcements: [Announcement!]!
    announcement: (_id: ID!): Announcement!
    comments: [Comment]!
    comment: (_id: ID!): Comment!
    me: User
  }

  type Mutation {
    createUser(username: String!, password: String!, email: String!): User!
    createAnnouncement(announcementText: String!): Announcement!
    updateAnnouncement(_id: ID!, announcementText: String!): Announcement!
    deleteAnnouncement(_id:ID!): Announcement!
    createComment(commentText: String!): Comment!
    updateAnnouncement(_id: ID!, announcementText: String!): Announcement!
    deleteAnnouncement(_id:ID!): Annoucenment!
  }

  type Subscription{
    updateDonation()
  }
`;

module.exports = typeDefs;
