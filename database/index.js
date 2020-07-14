// F include mongoose in the project
const mongoose = require('mongoose');
// F open a connection to te database  in your local runner
mongoose.connect('mongodb://localhost/fetcher',{ useNewUrlParser: true });

// F We now need to get notified if we connect successfully or if a connection error occurs:
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected")
});

// F build the schema
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : Number,
  name : String

});
// F compiling our schema into a Model.
// F A model is a class with which we construct documents.
let Repo = mongoose.model('Repo', repoSchema);

// Add functionality
let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;