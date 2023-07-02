


const mongoose = require('mongoose')
const express = require("express")
const bodyParser = require("body-parser")
const DB_config = require('./configs/db.config')
const serverConfig = require('./configs/server.config')
const expressApp = express()
var cors = require("cors")


expressApp.use(bodyParser.json())
expressApp.use(cors())


require('./Crons/notificationSender')
mongoose.connect(DB_config.DB_URL)

const db = mongoose.connection

db.on('error' , () => {
    console.log("error occured while connecting to DB" )
})

db.once('open' , () => {
    setTimeout(() => {
        console.log("connected successfully to the database ==> " + DB_config.DB_NAME);
        // init();
    },2000)
    
})


require("./Routers/ticketNotification.route")(expressApp)

expressApp.listen(serverConfig.PORT , () => {
    console.log("our notification app is running on PORT No. ==>  " + serverConfig.PORT)
})

// const mongoose = require('mongoose')
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require("body-parser")
// const connectDB = require('./configs/db.config');


// // Create Express app
// const app = express();

// // Connect to the database
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());

// // API routes
// require('./Routers/movieRouter')(app)

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });