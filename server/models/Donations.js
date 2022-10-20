const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  donationAmount: {
    type: Number,
    required: true,
  },

});

const Donations = model('Donation', donationSchema);

module.exports = Donations;
