const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/clinte/yahya',(req,res)=>{
    res.json({massge: "Welcome !"});
})

app.get('/clinte',(req,res)=>{
    res.json({massge: "Welcome ", name:req.query.name});
})

app.post('/clinte/yahya',(req,res)=>{
    res.json({ message:req.body.massage ,name:req.body.name });
})

app.listen(8000,()=>{
    console.log('port number 8000');
});