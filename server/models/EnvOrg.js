const { Schema, model } = require('mongoose');

const envorgSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const EnvOrg = model('EnvOrg', envorgSchema);

module.exports = EnvOrg;
