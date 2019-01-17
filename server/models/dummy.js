const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/restful-test', { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected!');
  }).catch((err) => {
    console.log('MongoDB Connection Error:', err);
    process.exit(1);
});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const testSchema = new Schema({
  name: {type: String, required: true, minlength: [3, 'Name cannot be less than 3 characters.'], maxlength: [255, 'Name cannot exceed 255 characters.']},
  createdAt:  { type: Date, default: Date.now },
  updatedAt:  { type: Date, default: Date.now }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
