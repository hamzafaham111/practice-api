import { gql } from "apollo-server-express";

// Define the GraphQL schema
const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        city: String
        age: String
        m_status: String
    }

    type Product {
        _id: ID!
        name: String!
        price: Float!
        description: String!
        category: String!
        user: User!
    }

    type Query {
        users: [User]
        user(id: ID!): User
        products: [Product]
        product(id: ID!): Product
    }

    type Mutation {
        createUser(name: String!, email: String!, city: String, age: String, m_status: String): User
        createProduct(name: String!, price: Float!, description: String!, category: String!, userId: ID!): Product
    }
`;

export default typeDefs;
