

module.exports = {

    DB_NAME : "notification_db",
    DB_URL : "mongodb://127.0.0.1/notification_db"
    // DB_URL : "mongodb+srv://Amarjeet_Dalai:Amarjeet123@crm-db.ohpqaiu.mongodb.net/"
}


// const mongoose = require('mongoose');
// const { DB_HOST, DB_PORT, DB_NAME } = require("./config");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to the database');
//   } catch (error) {
//     console.error('Database connection failed', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// module.exports = {

//     DB_NAME : "bookmyshow",
//     DB_URL : "mongodb://127.0.0.1/bookmyshow"
//     // DB_URL : "mongodb://127.0.0.1/notification_db"
//     // DB_URL : "mongodb+srv://Amarjeet_Dalai:Amarjeet123@crm-db.ohpqaiu.mongodb.net/"
// }
