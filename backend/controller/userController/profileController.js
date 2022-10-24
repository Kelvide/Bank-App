const nodemailer = require("nodemailer");
const usersModel = require("../../models/usersModel");
require('dotenv').config()

const signup = async (req,res)=>{
  const transporter = nodemailer.createTransport({
    service:"hotmail",
    auth: {
      user:process.env.EMAIL,
      pass:process.env.PASS
    }
  })
  let { username, email, password }=req.body;
  const account_no = Math.floor(10000000000 + Math.random() * 90000000000)
  if (email&&password&&account_no) {
    const signup = new usersModel({username, email, account_no, password})
    signup.save(err=>{
      if(!err) {
        try {
          let info =  transporter.sendMail({
            from: '"Banka App"',
            to: `${email}`,
            subject: "Banka App Account Verification ✔",
            text: "Here is your verification link",
            html: "<a href='http://localhost:2600/api/user/verify/'>Verify Your Email</a>",
          });
          res.json({message:"Signed Up Successfully", info:info,status: true});
        } catch(err){
          res.json({message:err.message, status: false});
        }
    } else if (err) {
        if (err) {
            res.json({message:err.message, status: false})
        } else if (err.keyPattern.username==1) {
          res.json({message:"Username Already Existed", status: false})
        } else  if (err.keyPattern.email==1){
            res.json({message:"Email Already Existed", status:false})
        }
    }
    })
  } else {
    res.json({message:"All fields must be filled", status:false})
  }
}

const updateProfile =  async (req,res) => {
  let { username, photoURL } = req.body;
  if (!photoURL.length>0) {
    photoURL="https://drive.google.com/file/d/1LaDdvgUbRKT_Z_DCMm2Hy9XfMzCQJz2E/view"
  }
}
module.exports={signup, updateProfile}