

const nodeMailer = require("nodemailer")

module.exports = nodeMailer.createTransport(
    {   
           host: "smtp.gmail.com",
           port : 465,
           secure: true,
        //    requireTLS: true,
        
        auth : {
            user: "Pareshdalai5780@gmail.com", 
            pass: "vjfdskjiqrdugtlt", 
        }
        
        
    }
)

