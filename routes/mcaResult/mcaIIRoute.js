const express = require('express');
const mcaIIroute = express.Router();

const mongoose = require('mongoose');

const mcaIIdata = require('../../models/mcaResult/mcaIIModel')

//READ
mcaIIroute.get('/', (req, res) => {

    mcaIIdata.find((err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
});

//READ by ID
/*mcaIIroute.get('/:id', (req, res) => {
    mcaIIdata.findById(req.params.id,(err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})*/

//READ BY ROLLNO
mcaIIroute.get('/:rollno', (req,res)=>{
    mcaIIdata.find({rollno: req.params.rollno},(err, data) => {
        if(err) {
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
})

//CREATE
mcaIIroute.post('/create/', (req, res) => {
    let data = new mcaIIdata(req.body);
    data.save().
    then(data => { res.status(200).json({ 'sample': 'created successfully'})}).
    catch(err => { res.status(400).send('Failed to create new record');})
})



//UPDATE
mcaIIroute.post('/update/:id' , (req, res) => {
    mcaIIdata.findById(req.params.id, (err, data) => {
        if(!data){
            return next(new Error('Could not load Document'));
        }
        else{
            data.rollno =req.body.rollno;
            data.name=req.body.name;
            data.eMCA501=req.body.eMCA501;
            data.eMCA502=req.body.eMCA502;
            data.eMCA503=req.body.eMCA503;
            data.eMCA504=req.body.eMCA504;
            data.eMCA505=req.body.eMCA505;
            data.eMCA506=req.body.eMCA506;
            data.eMCA507=req.body.eMCA507;
            data.sMCA501=req.body.sMCA501;
            data.sMCA502=req.body.sMCA502;
            data.sMCA503=req.body.sMCA503;
            data.sMCA504=req.body.sMCA504;
            data.sMCA505=req.body.sMCA505;
            data.sMCA506=req.body.sMCA506;
            data.sMCA507=req.body.sMCA507;
            data.save().
            then(data => { res.status(200).json({ 'sample': 'updated successfully'})}).
            catch(err => { res.status(400).send('Failed to create new record');})
        }
    })
})

//DELETE
mcaIIroute.get('/delete/:id', (req, res) => {
    mcaIIdata.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('deleted successfully')
        }
    })
})




module.exports=mcaIIroute;
