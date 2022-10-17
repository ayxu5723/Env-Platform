const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    password: String!
    email: String!
  }

  type EnvOrg {
    _id: ID!
    name: String!
    password: String!
    email: String!
    address: String!
  }

  type Query {
    user: [name]
    envorg(_id: String): [name]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
