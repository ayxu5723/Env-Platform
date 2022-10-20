const { User, EnvOrg, Announcements, Comments, Donations } = require('../models');



const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
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
    createEnvOrg: async (parent, args) => {
      const env_org = await EnvOrg.create(args);
      return env_org;
    },
    updateAnnouncement: async (parent, { _id, techNum }) => {
      const vote = await EnvOrg.findOneAndUpdate(
        { _id },
        // { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
  Subscription: {
    updateDonation: async (parent, args, context) => {
      const donation = await Donations.create(args);
      return donation;
    }
  }

};

module.exports = resolvers;
