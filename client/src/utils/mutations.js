import { gql } from '@apollo/client'

export const ADD_COMMENT = gql`
    mutation addComment($username: String!, $relation: String!, $commentText: String!) {
        addComment(username: $username, relation: $relation, commentText: $commentText) {
            _id
            commentText
            createdAt
            username
            relation
        }
    }
`;

