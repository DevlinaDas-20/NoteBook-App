const mongoose = require('mongoose');
const mongURI = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

const connectToMongo = ()=>{
    mongoose.connect(mongURI, ()=>{
        console.log('Connected to local mongo db SUCCESSFULLY!')
    })
}


module.exports = connectToMongo;