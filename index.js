var express = require('express');
var app  = express();
var port = Number(process.env.PORT || 3000);


app.use(express.static('public'));
app.get('/', function(req, res){
  res.sendFile( __dirname + "/" + "index.html" );
});

var server = app.listen(port, function(){
      console.log("Listening ");
});
