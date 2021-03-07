var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  descriptions: String,
  tags: [String],
  createdAT: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Article', articleSchema);
