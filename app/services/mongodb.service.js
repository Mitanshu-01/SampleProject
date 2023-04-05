const mongoose = require('mongoose');

exports.connect = () => {
    // connecting to mongo database
    mongoose.connect('mongodb+srv://bhargavamitanshu3:MongoAtlas@cluster0.cw32aib.mongodb.net/placementmnit', { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true }, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Successfully connected to database.');
        }
    });
}
