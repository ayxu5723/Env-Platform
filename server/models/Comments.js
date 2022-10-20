const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    commentText: {
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
    username: {
      type: String,
      required: true,
    },
 

  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Comments = model('comments', commentSchema);

module.exports = Comments;