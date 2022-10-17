const { User, EnvOrg } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    envorgs: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return EnvOrg.find(params);
    },
  },
  Mutation: {
    createEnvOrg: async (parent, args) => {
      const env_org = await EnvOrg.create(args);
      return env_org;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await EnvOrg.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
