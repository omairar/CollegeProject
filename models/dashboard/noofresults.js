const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noofresults = new Schema({
    count: { type: 'number'}
});

module.exports=mongoose.model('noofresult',noofresults);