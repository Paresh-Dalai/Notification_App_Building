

const ticketNotificationController = require('./../Controllers/ticketNotification.Controller')

module.exports = function (app) {
    app.post("/ticketNotificationService/api/v1/notification" , ticketNotificationController.acceptNotificationRequest)
    app.get("/ticketNotificationService/api/v1/notifications/:id" , ticketNotificationController.getNotification) 
}