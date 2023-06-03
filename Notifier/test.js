


const emailtransporter = require("./EmailService")


const emailObj = {
    from : "Pareshdalai5780@gmail.com",
    to : "Pareshdalai143@gmail.com",
    subject : "test mail from crm-backend",
    text : "hello !!! welcome"
}
emailtransporter.sendMail(emailObj, async function (err,info)  {
    if(err) {
        console.log(err.message)
    } else {
        console.log(info)
    }
})