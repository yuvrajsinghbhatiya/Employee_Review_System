
const mongoose = require('mongoose');

// connect from mongodb
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect('mongodb+srv://yvrjbhatiya:ysb3atlas@ersdb.bl4kci0.mongodb.net/ERS?retryWrites=true&w=majority', options);

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;