var express = require('express');
const { sendmail } = require('../utils/sendMail');
const UserCollection = require('../model/userModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/sendmail',async(req, res, next)=>{
  await sendmail(req,res);
  const user = await new UserCollection(req.body);
  await user.save();
  res.send("Email Send Sucessfully !")
});


module.exports = router;


