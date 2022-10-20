const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
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
  role: {
    type: String,
    required: true, 
    match: [/^(organisation|individual)$/]
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comments',
    }
  ],
  announcements: [
    {
      type: Schema.Types.ObjectId,
      ref: 'announcements',
    }
  ],
});

const User = model('User', userSchema);

module.exports = User;
