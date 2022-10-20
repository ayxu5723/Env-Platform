const { Schema, model } = require('mongoose');


const envorgSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  address: {
    type: String,
  },
  announcements: [
    {
      type: Schema.Types.ObjectId,
      ref: 'announcements',
    }
  ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

envorgSchema.virtual('announcementCount').get(function () {
  return this.announcements.length;
});

const EnvOrg = model('EnvOrg', envorgSchema);

module.exports = EnvOrg;
