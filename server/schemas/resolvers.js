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
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    envorgs: async () => {
      return EnvOrg.find({});
    },
    envorg: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return EnvOrg.find(params);
    },
    announcements: async () => {
      return Announcements.find({});
    },
    announcement: async (parent, { _id}) => {
      const params = _id? { _id } :{};
      return Announcements.find(params);
    },
    comments: async () => {
      return Comments.find({});
    },
    comment: async (parent, { _id}) => {
      const params = _id? { _id } :{};
      return Comments.find(params);
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
      const token = signToken(envorg);
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
        const
      }
    },

    updateAnnouncement: async (parent, { _id }) => {
      const vote = await EnvOrg.findOneAndUpdate(
        { _id },
        { new: true }
      );
      return vote;
    },
  },
  Subscription: {
    updateDonation: async (parent, args) => {
      const donation = await Donations.create(args);
      return donation;
    }
  }

};

module.exports = resolvers;
