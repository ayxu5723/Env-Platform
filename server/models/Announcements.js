const { Schema, model } = require('mongoose');

const announcementSchema = new Schema(
  {
    announcementText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      get: (date) => {
        if (date) return date.toLocaleString()
      },
    },
    name: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comments',
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

const Announcements = model('announcement', announcementSchema);

module.exports = Announcements;