const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        comments: [Comment]
    }
    
    type Comment {
        _id: ID
        username: String
        commentText: String
        createdAt: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comments(username: String): [Comment]
        comment(_id: ID!): Comment
    }

    type Mutation {
        login(username: String, password: String!): Auth
        addUser(username: String, password: String!): Auth
        addComment(commentText: String!): Comment
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;