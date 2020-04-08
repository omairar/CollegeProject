const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mcaIIIData = new Schema({
    rollno: { type: 'string'},
    name: {type: 'string'},
    e1: {type: 'number'},
    e2: {type: 'number'},
    e3: {type: 'number'},
    e4: {type: 'number'},
    e5: {type: 'number'},
    e6: {type: 'number'},
    e7: {type: 'number'},
    s1: {type: 'number'},
    s2: {type: 'number'},
    s3: {type: 'number'},
    s4: {type: 'number'},
    s5: {type: 'number'},
    s6: {type: 'number'},
    s7: {type: 'number'},
    g1: {type: 'string'},
    g2: {type: 'string'},
    g3: {type: 'string'},
    g4: {type: 'string'},
    g5: {type: 'string'},
    g6: {type: 'string'},
    g7: {type: 'string'},
    gp1: {type: 'number'},
    gp2: {type: 'number'},
    gp3: {type: 'number'},
    gp4: {type: 'number'},
    gp5: {type: 'number'},
    gp6: {type: 'number'},
    gp7: {type: 'number'},
    ce1: {type: 'number'},
    ce2: {type: 'number'},
    ce3: {type: 'number'},
    ce4: {type: 'number'},
    ce5: {type: 'number'},
    ce6: {type: 'number'},
    ce7: {type: 'number'},
    pe1: {type: 'number'},
    pe2: {type: 'number'},
    pe3: {type: 'number'},
    pe4: {type: 'number'},
    pe5: {type: 'number'},
    pe6: {type: 'number'},
    pe7: {type: 'number'},

    cgpa: {type:'number'},
    result: {type:'string'},

    
});

module.exports=mongoose.model('mcaIIIData',mcaIIIData);



