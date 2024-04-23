import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
  }

  type Mutation {
    createUser(userInput: UserInput): User
    updateUser(id: ID!, userInput: UserInput): User
    deleteUser(id: ID!): String
  }
`;

export default typeDefs;
