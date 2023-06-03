
const cron = require('node-cron');
const TicketNotification = require('./../Models/ticketNotification')
const emailTransporter = require('./../Notifier/EmailService');

cron.schedule('*/30 * * * * *', async ()=>{
    
    let notifications = await TicketNotification.find({
    status : "NOT_SENT"
    });
 
  if (notifications && notifications.length > 0) {
    notifications.forEach(notification => {
        const mailData = {
            from: "Pareshdalai5780@gmail.com",
            to: notification.recepientEmails,
            subject: notification.subject,
            text: notification.content
        }

        //Send the email
        emailTransporter.sendMail(mailData, async function (err, info) {
            if(err){
                console.log(err.message)
            }else{
                console.log(info)

                //Update the notification document status
                notification.status = "SENT"
                await notification.save()
            }
        })
    })
}

  })