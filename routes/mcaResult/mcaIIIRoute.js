const express = require('express');
const mcaIIIroute = express.Router();

const mongoose = require('mongoose');

const mcaIIIdata = require('../../models/mcaResult/mcaIIIModel')

//READ
mcaIIIroute.get('/', (req, res) => {

    mcaIIIdata.find((err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
});

//READ by ID
/*mcaIIIroute.get('/:id', (req, res) => {
    mcaIIIdata.findById(req.params.id,(err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})*/

//READ BY ROLLNO
mcaIIIroute.get('/:rollno', (req,res)=>{
    mcaIIIdata.find({rollno: req.params.rollno},(err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})

//CREATE
mcaIIIroute.post('/create/', (req, res) => {
    let data = new mcaIIIdata(req.body);
    data.save().
    then(data => { res.status(200).json({ 'sample': 'created successfully'})}).
    catch(err => { res.status(400).send('Failed to create new record');})
})


//DELETE
mcaIIIroute.get('/delete/:id', (req, res) => {
    mcaIIIdata.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('deleted successfully')
        }
    })
})




module.exports=mcaIIIroute;
