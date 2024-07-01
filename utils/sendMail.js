const nodemailer = require("nodemailer")


exports.sendmail = (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host:"smtp.gmail.com",
        port:465,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });
    const mailOptions = {
        from: "Omta Pvt. Ltd.<process.env.EMAIL>",
        to: req.body.email,
        subject: "SEND MAIL",
        html:`<h1>Email Send Sucessfully !</h1>`
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            return res.send(err);
        }
        console.log(info);
    })
}