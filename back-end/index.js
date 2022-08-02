const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var database=require('./database');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get('/', function(req, res) {
	res.send('Hello from server')
})

app.post('/enroll', function(req, res) {
  var name=req.body.name
  var pass=req.body.pass
  var query=`INSERT INTO user VALUES(2,"${name}","${pass}")`;
  database.query(query,function(error,data){
    if(error){
      throw error
    }
    else{
      res.redirect("/enroll")
    }
  });
  console.log(req.body)
})

app.listen(PORT, function(){
  console.log("Server running on localhost:" + PORT);
});