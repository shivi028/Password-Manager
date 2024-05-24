const express  = require("express")
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
const bodyparser = require('body-parser');
const cors = require('cors')


dotenv.config()

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

const dbName = 'passDraft'
const app = express()
const port = 3000
app.use(bodyparser.json());
app.use(cors())

client.connect();
console.log('Connected successfully to server');

// get all the password
app.get('/', async (req, res)=>{
    const db = client.db(dbName);
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
    
})

// save a password
app.post('/', async (req, res) =>{
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult})
})

// delete a password by id
app.delete('/', async (req, res) =>{
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success: true, result: findResult})
})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})