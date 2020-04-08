const express = require('express');
const dashboardroute = express.Router();
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const authorize = require("../../middlewares/auth");

const noofresults = require('../../models/dashboard/noofresults');
const noofpassed = require('../../models/dashboard/npofpassed');
const nooffailed = require('../../models/dashboard/nooffailed');


//////////////////////////////////////////////// GET COUNT ?????????????????????????????????????????????????????????????????

dashboardroute.get('/countresults',(req,res)=>{
    noofresults.find((err,data)=>{
       if(err){
           console.log(err)
       } 
       else{
           res.send(data);
       }
    })
})


dashboardroute.get('/countpassed',(req,res)=>{
    noofpassed.find((err,data)=>{
       if(err){
           console.log(err)
       } 
       else{
           res.send(data);
       }
    })
})


dashboardroute.get('/countfailed',(req,res)=>{
    nooffailed.find((err,data)=>{
       if(err){
           console.log(err)
       } 
       else{
           res.send(data);
       }
    })
})



/////////////////////////////////////////////////UPDATE  COUNT ????????????????????????????????????????????????????????????????

dashboardroute.post('/updatecountresults/:_id',(req,res)=>{
    noofresults.findById(req.params._id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            sum=data.count+ req.body.count
            data.count= sum;
        }
        data.save().
        then(data => { res.status(200).json({ 'sample': 'updated successfully'})}).
        catch(err => { res.status(400).send('Failed to create new record');})
    })
})



dashboardroute.post('/updatecountpassed/:_id',(req,res)=>{
    noofpassed.findById(req.params._id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            sum=data.count+ req.body.count
            data.count= sum;
        }
        data.save().
        then(data => { res.status(200).json({ 'sample': 'updated successfully'})}).
        catch(err => { res.status(400).send('Failed to create new record');})
    })
})




dashboardroute.post('/updatecountfailed/:_id',(req,res)=>{
    nooffailed.findById(req.params._id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            sum=data.count+ req.body.count
            data.count= sum;
        }
        data.save().
        then(data => { res.status(200).json({ 'sample': 'updated successfully'})}).
        catch(err => { res.status(400).send('Failed to create new record');})
    })
})



///////////////////////////////////////////////////RESET DASHBOARD ????????????????????????????????????????????????????????????????

dashboardroute.get('/resetresults/:_id',(req,res)=>{
    noofresults.findById(req.params._id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            data.count=0;
        }
        data.save().
        then(data => { res.status(200).json({ 'sample': 'updated successfully'})}).
        catch(err => { res.status(400).send('Failed to create new record');})
    })
})

dashboardroute.get('/resetpassed/:_id',(req,res)=>{
    noofpassed.findById(req.params._id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            data.count=0;
        }
        data.save().
        then(data => { res.status(200).json({ 'sample': 'updated successfully'})}).
        catch(err => { res.status(400).send('Failed to create new record');})
    })
})

dashboardroute.get('/resetfailed/:_id',(req,res)=>{
    nooffailed.findById(req.params._id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            data.count=0;
        }
        data.save().
        then(data => { res.status(200).json({ 'sample': 'updated successfully'})}).
        catch(err => { res.status(400).send('Failed to create new record');})
    })
})



module.exports=dashboardroute;
