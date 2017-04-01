//express
var express = require('express');
var app = express();
//parser
var parser = require('body-parser');
var jsonParser = parser.json({
  limit: '200mb'
});
app.use(express.static(__dirname))


//mongodb
var MongoClient = require('mongodb').MongoClient;
  //Connection URL
var url = 'mongodb://localhost:27017/Hanson';
//serer connecting method
var collection;
MongoClient.connect(url, function(err, db){
  if(err){
    console.log("Connection Error")
    process.exit(1);
  }else{
    collection = db.collection('myCollection');
    console.log("Connection to mongo successful")
  }
});


app.post('/addNote', jsonParser, function(req,res){
    var data = req.body;

    collection.insert(data,function(err,docs){
      if(err){
        res.json({success: false, message: "error saving data"});
      }else{
        res.sendStatus(200);
      }
    })
})

app.get('/getData', jsonParser, function(req,res){
    collection.find().toArray(function(err,docs){
      if(err){
          res.json({success: false, message: "error retreiving data"});
      }else{
        res.json(docs);
      }
    })
})



//"test:server": "cross-env NODE_ENV=test PORT=8080 MONGO_URL=mongodb://localhost:27017/Hanson --compilers js:babel-core/register --recursive server/tests/**/*.spec.js"
var port = process.env.PORT || 8080;
//var port = 8000
var server = app.listen(port, function(){

  console.log("listening on port " + port)
});
