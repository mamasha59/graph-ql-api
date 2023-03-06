const mongoose = require('mongoose');

const connectMongooseDB = async() => {
 const db = await mongoose.connect(process.env.MONGO_URL);
 console.log(`Connected db ${db.connection.host}`.cyan)
}

module.exports = connectMongooseDB;