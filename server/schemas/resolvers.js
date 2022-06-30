const { AuthenticationError } = require('apollo-server-express');
const { Comment } = require('../models');

const resolvers = {
    Query: {
        comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comment.find(params).sort({ createdAt: -1 });
        }
    },
    Mutation: {
        addComment: async (parent, args ) => {
                const comment = await Comment.create({ ...args, username: {username} })

                await User.findByIdAndUpdate(
                    { _id: username },
                    { $push: {comments: comment._id } },
                    { new: true }
                );

                return comment;
        }       
    }
};

module.exports = resolvers;