import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: nationality!
    friends: [User!]
    favoriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    title: String!
    description: String!
    yearOfPublication: Int!
    isGood: Boolean!
  }
  input createUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: nationality
  }
  type Mutation {
    createUser(input: createUserInput): User
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
  enum nationality {
    ALGERIEN
    FRENSH
  }
`;
