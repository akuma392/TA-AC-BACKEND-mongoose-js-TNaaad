var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  descriptions: String,
});

module.exports = mongoose.model('Article', articleSchema);
