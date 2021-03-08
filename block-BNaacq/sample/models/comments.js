var mongoose = require('mongoose');
const User = require('./user');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var commentSchema = new Schema(
  {
    content: String,
    article: String,
    // author: User.schema.objectId,
    author: { type: ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);
var Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;

// - content
// - author -> ID of user
// - article ->
// - timestamps()
