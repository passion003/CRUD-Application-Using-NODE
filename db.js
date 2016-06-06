var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost:27017/myapp27', function (error) {
    if (error) {
        console.log(error);
    }
});

var videosSchema = new mongoose.Schema({
  title: String,
  description: String
});

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
global.VideosGbl = mongoose.model('Videos', videosSchema);
global.UsersGbl = mongoose.model('Users', userSchema);