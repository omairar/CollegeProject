const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noofpassed = new Schema({
    count: { type: 'number'}
});

module.exports=mongoose.model('noofpassed',noofpassed);