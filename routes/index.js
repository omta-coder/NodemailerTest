var express = require('express');
const { sendmail } = require('../utils/sendMail');
const UserCollection = require('../model/userModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post("/login",async(req,res,next)=>{
  try {
    const user = await new UserCollection(req.body)
    await user.save();
    res.redirect("/show")
    
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
})
router.post('/sendmail', function(req, res, next) {
  sendmail(req,res);
});

router.get("/show",(req,res,next)=>{
  res.render("show");
})
module.exports = router;


