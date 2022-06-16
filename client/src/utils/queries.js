import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
    query comments($username: STRING) {
        comments(username: $username) {
            _id 
            commentText
            createdAt
            username
            relation
        }
    }
`;