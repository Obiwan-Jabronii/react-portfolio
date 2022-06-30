const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Comment {
        _id: ID
        username: String
        commentText: String
        createdAt: String
        relation: String
    }
    type Query {
        comments(username: String): [Comment]
    }
    type Mutation {
        addComment(username: String!, commentText: String!, relation: String!): Comment
    }
`;

module.exports = typeDefs;