const { AuthenticationError } = require('apollo-server-express');
const { User, Announcements, Comments } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('announcements');
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('announcements');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    announcements: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Announcements.find(params).sort({ createdAt: -1 });
    },
    announcement: async (parent, { announcementId}) => {
      return Announcements.findOne({ _id: announcementId });
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comments.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId}) => {
      return Comments.findOne({ _id: commentId });
    },
  },

  // User: {
  //   announcements: async (parent, args, context) => {
  //     const userId = parent._id;
  //     return Announcements.filter((announcement) => announcement.userId === userId)
  //   },
  // },

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
    createAnnouncement: async (parent, { announcementText}, context) => {
      if (context.User) {
        const announcement = await Announcements.create({
          announcementText,
          username: context.user.username,
        });
         
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { announcements: announcement._id}}
        )
       
        return announcement
      }
      throw new AuthenticationError('Please Log In to create an announcement')
    },
//make sure updates are working correctly
    updateAnnouncement: async (parent, { username, announcementId, newAnnouncementText }, context) => {
      if (context.User) {
        const announcement = await Announcements.findOneAndUpdate(
          { 
            announcementText,
            username: context.user.username
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
    deleteAnnouncement: async (parent, { announcementId }, context) => {
      if (context.User) {
        const announcement = await Announcements.findOneAndDelete ({
          _id: announcementId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { announcements: announcement._id } },
        );
        return announcement;
      }
      throw new AuthenticationError('Please Log In to delete an announcement')
    },

    createComment: async (parent, { commentText }, context) => {
      if (context.User) {
        const comment = await Comments.create({
          commentText,
          username: context.user.username,
        });
         
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { comments: comment._id}}
        )
       
        return comment;
      }
      throw new AuthenticationError('Please Log In to create an announcement')
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

    deleteComment: async (parent, { commentId }, context) => {
      if (context.User) {
        const comment = await Comments.findOneAndDelete ({
          _id: commentId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { comments: comments._id } },
        );
        return comment;
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
