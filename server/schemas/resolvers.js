const { AuthenticationError } = require('apollo-server-express');
const { User, EnvOrg, Announcements, Comments, Donations } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id});
      }
      throw new AuthenticationError('Please Log in');
    },
    user: async (parent, { username }) => {
      return User.findOne({ _id: username });
    },
    envorgs: async () => {
      return EnvOrg.find();
    },
    envorg: async (parent, { orgId }) => {
      return EnvOrg.findOne({ _id: orgId });
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
    createUser: async (parent, {username, email, password }) => {
      const user = await User.create ({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    userLogin: async (parent, {email, password }) => {
      const user = await User.findOne({ email });
      
      if (!user) {
        throw new AuthenticationError('');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('');
      }
      const token = signToken(user);
      return { token, user };
    },

    createEnvOrg: async (parent, { name, email, password }) => {
      const env_org = await EnvOrg.create({ name, email, password });
      const token = signToken(env_org);
      return { token, env_org };
    },

    orgLogin: async (parent, {email, password }) => {
      const org = await EnvOrg.findOne({ email });
      
      if (!org) {
        throw new AuthenticationError('');
      }

      const correctPw = await org.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('');
      }
      const token = signToken(org);
      return { token, org };
    },

    createAnnouncement: async (parent, { orgId, announcementText}, context) => {
      if (context.EnvOrg) {
        const updatedOrg = await EnvOrg.findOneAndUpdate(
          { _id: orgId },
          {
            $addToSet: { announcements: announcementText },
          },
          {
            new: true,
          }
        )
        return updatedOrg
      }
      throw new AuthenticationError('Please Log In to create an announcement')
    },

    updateAnnouncement: async (parent, { orgId, announcementId, newAnnouncementText }, context) => {
      if (context.EnvOrg) {
        const updatedOrg = await EnvOrg.findOneAndUpdate(
          { 
            _id: orgId,
            "anouncement._id": announcementId
          },
          {
            $set: { "announcements.$.text" : newAnnouncementText },
          },
          {
            new: true,
          }
        )
        return updatedOrg
      }
      throw new AuthenticationError('Please Log In to update an announcement')
    },
    deleteAnnouncement: async (parent, { announcement }, context) => {
      if (context.EnvOrg) {
        return EnvOrg.findOneAndUpdate(
          { _id: context.envorg._id },
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
