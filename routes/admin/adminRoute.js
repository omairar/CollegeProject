const express = require('express');
const adminroute = express.Router();
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const authorize = require("../../middlewares/auth");

const adminData = require('../../models/admins/adminModel');

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'seceretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
} 


//get Admins

adminroute.get('/',(req,res) =>{
  
  adminData.find((err,admins)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(admins)
    }
  })

})

//Register
adminroute.post('/register/', (req, res) => {
  let data = new adminData(req.body);
  data.save().
  then(registeredUser => { 

      let payload  = {subject: registeredUser._id}
      
      let token = jwt.sign(payload, 'seceretKey')

      res.status(200).send({ token})

  }).
  catch(err => { res.status(400).send('Failed to create new record');})
})

//Login

adminroute.post('/login',(req,res)=>{

  let admin = req.body;

  adminData.findOne({username: admin.username},(err, user) =>{   // admin got fron findone adminData =>>> gets sstored into user 
      if(err) {
          console.log(err);
      }
      else{
          if(!user){
              res.status(401).send('invalid username');
          }
          else if (user.password != admin.password){
              res.status(401).send('invalid password');
          }
          else{

              let payload  = {subject: user._id}
      
              let token = jwt.sign(payload, 'seceretKey')

              res.status(200).send({ token})
              //res.status(200).send(user);
          }
  
      }
  })
});


  adminroute.get('/special', authorize , (req, res) => {
    
    res.json("Admin Panel")
    
  })


  /*adminroute.get('/special', verifyToken , (req, res) => {
    
    res.json("Admin Panel")

    
  })*/
  

  adminroute.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

  

  ///delete admins

  adminroute.get('/delete/:id',(req,res)=>{
    adminData.findByIdAndRemove(req.params.id, (err, admin) => {
      if(err){
          res.json(err);
      }
      else{
          res.json('deleted successfully')
      }
  })
  })

module.exports=adminroute;