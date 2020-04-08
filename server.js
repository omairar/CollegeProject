const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

var path = require('path');

const app = express();

const port = process.env.PORT || 2856;


//middlewares

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

//routes congiguration for result
const adminRoute = require('./routes/admin/adminRoute');

const mcaIroute = require('./routes/mcaResult/mcaIRoute');
const mcaIIroute = require('./routes/mcaResult/mcaIIRoute');
const mcaIIIroute = require('./routes/mcaResult/mcaIIIRoute');
const mcaIVroute = require('./routes/mcaResult/mcaIVRoute');
const mcaVroute = require('./routes/mcaResult/mcaVRoute');
const mcaVIroute = require('./routes/mcaResult/mcaVIRoute');

const dashboardRoute = require('./routes/dashboard/dashboardRoute');
app.use('/admin',adminRoute);

app.use('/mcaI',mcaIroute);
app.use('/mcaII',mcaIIroute);
app.use('/mcaIII',mcaIIIroute);
app.use('/mcaIV',mcaIVroute);
app.use('/mcaV',mcaVroute);
app.use('/mcaVI',mcaVIroute);

app.use('/dash',dashboardRoute);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})



app.get('/',(req,res)=>{
    res.send("we are up and running")
})


const mongoURI = "mongodb://omair:omair1995@cluster0-shard-00-00-k70sg.mongodb.net:27017,cluster0-shard-00-01-k70sg.mongodb.net:27017,cluster0-shard-00-02-k70sg.mongodb.net:27017/results?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(mongoURI,{ useUnifiedTopology: true },()=>{
    console.log("DB connected");
});

/*mongoose.connect('mongodb://localhost:27017/results',()=>{
    console.log("DB connected");
});*/

//mongodb+srv://omair:<password>@cluster0-k70sg.mongodb.net/test?retryWrites=true&w=majority


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://omair:<password>@cluster0-k70sg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/


app.listen(port,()=>{
    console.log("server started at port"+port)
})
