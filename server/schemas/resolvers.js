const { AuthenticationError } = require('apollo-server-express');
const { User, Announcements, Comments } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    announcements: async () => {
      return Announcements.find();
    },
    announcement: async (parent, { announcementId}) => {
      return Announcements.findOne({ _id: announcementId });
    },
    comments: async () => {
      return Comments.find();
    },
    comment: async (parent, { commentId}) => {
      return Comments.findOne({ _id: commentId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    createAnnouncement: async (parent, { userId, announcementText}, context) => {
      if (context.User) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { announcements: announcementText },
          },
          {
            new: true,
          }
        )
        return updatedUser
      }
      throw new AuthenticationError('Please Log In to create an announcement')
    },

    updateAnnouncement: async (parent, { userId, announcementId, newAnnouncementText }, context) => {
      if (context.User) {
        const updatedUser = await User.findOneAndUpdate(
          { 
            _id: userId,
            "anouncement._id": announcementId
          },
          {
            $set: { "announcements.$.text" : newAnnouncementText },
          },
          {
            new: true,
          }
        )
        return updatedUser
      }
      throw new AuthenticationError('Please Log In to update an announcement')
    },
    deleteAnnouncement: async (parent, { announcement }, context) => {
      if (context.User) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { announcements: announcement } },
          {new: true }
        );
      }
      throw new AuthenticationError('Please Log In to delete an announcement')
    },

    createComment: async (parent, { userId, commentText}, context) => {
      if (context.User) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { comments: commentText },
          },
          {
            new: true,
          }
        )
        return updatedUser
      }
      throw new AuthenticationError('Please Log In to add a comment')
    },

    updateComment: async (parent, { userId, commentId, newCommentText }, context) => {
      if (context.User) {
        const updatedUser = await User.findOneAndUpdate(
          { 
            _id: userId,
            "comment._id": commentId
          },
          {
            $set: { "comments.$.text" : newCommentText },
          },
          {
            new: true,
          }
        )
        return updatedUser
      }
      throw new AuthenticationError('Please Log In to update a comment')
    },

    deleteComment: async (parent, { comment }, context) => {
      if (context.User) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { comments: comment } },
          {new: true }
        );
      }
      throw new AuthenticationError('Please Log In to delete a comment')
    },

  },
  // Subscription: {
  //   updateDonation: async (parent, args) => {
  //     const donation = await Donations.create(args);
  //     return donation;
  //   }
  // }
  
};

module.exports = resolvers;
