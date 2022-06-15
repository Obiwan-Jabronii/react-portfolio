const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/react-portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    UseCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;