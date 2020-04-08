const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminData = new Schema({
    username: { type: 'string'},
    password: {type: 'string'}
});

module.exports=mongoose.model('adminData',adminData);