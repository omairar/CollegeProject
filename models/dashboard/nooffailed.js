const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nooffailed = new Schema({
    count: { type: 'number'}
});

module.exports=mongoose.model('nooffailed',nooffailed);