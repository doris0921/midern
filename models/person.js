var mongoose = require('mongoose');
mongoose.connect('mongodb://midern:midern@ds013891.mlab.com:13891/midern');
//mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name : Number,
  words  : String
});
module.exports = mongoose.model('#', personSchema);
