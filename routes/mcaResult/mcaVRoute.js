const express = require('express');
const mcaVroute = express.Router();

const mongoose = require('mongoose');

const mcaVData = require('../../models/mcaResult/mcaVModel')

//READ
mcaVroute.get('/', (req, res) => {

    mcaVData.find((err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
});

//READ by ID
/*mcaVroute.get('/:id', (req, res) => {
    mcaVData.findById(req.params.id,(err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})*/

//READ BY ROLLNO
mcaVroute.get('/:rollno', (req,res)=>{
    mcaVData.find({rollno: req.params.rollno},(err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})

//CREATE
mcaVroute.post('/create/', (req, res) => {
    let data = new mcaVData(req.body);
    data.save().
    then(data => { res.status(200).json({ 'sample': 'created successfully'})}).
    catch(err => { res.status(400).send('Failed to create new record');})
})





//DELETE
mcaVroute.get('/delete/:id', (req, res) => {
    mcaVData.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('deleted successfully')
        }
    })
})




module.exports=mcaVroute;
