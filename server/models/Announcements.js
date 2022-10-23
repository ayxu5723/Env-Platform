const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const announcementSchema = new Schema(
  {
    announcementText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

announcementSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Announcements = model('Announcement', announcementSchema);

module.exports = Announcements;