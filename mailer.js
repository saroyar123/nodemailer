
var nodemailer = require('nodemailer')

exports.mail=async(req,res)=>{
  try {
    
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "12a59d5ee9acdc",
        pass: "5fba1769b31a02"
      }
    });

    const info=await transport.sendMail({
      from:'yarsaro2001@gmail.com',
      to:'saroyarhossain804@gmail.com',
      subject:'check nodemailer',
      text:'plain text',
      html:"<h1>hello</h1>"
      })

      res.status(200).json({
        success:true,
        message:"mail send",
        info
      })




  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
    })
  }
};


