const express  = require('express');
const { MongoClient } = require(mongodb);
const URL = 'mongodb://localhost:27017/test';


MongoClient.connent(URL, (err , db)=>{
    if(err){
        console.log(err)
    }else {
        console.log('connected to test');
        db.close();
    }
});

var app = express();

// app.get('/' , (req , res)=>{
//    res.send('<h1>hello express js');
// });

app.get('/:id' , function(req , res){
    res.send('The request is ' + req.params.id)
})


app.listen(3000 , function(err){
    if(err){
        console.log(err);
    }else {
        console.log('app is running on port number 3000');
    }
})