


const mongoose = require('mongoose')
const express = require("express")
const bodyParser = require("body-parser")
const DB_config = require('./configs/db.config')
const serverConfig = require('./configs/server.config')
const expressApp = express()
expressApp.use(bodyParser.json())

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