
var express = require('express');
var app = express(); //to use the libraries in express


/*
app.get('/',function(req,res){
    res.send('Hello World!');
});

//response of server for the request of the user
app.get('/students',function(req,res){
    res.send('Hi Students');
});


app.route('/students')
 -get(function(req,res)
*/

//so you can accept input from the user
app.use(require('body-parser')());

//put and delete method enabled
app.use(require('method-override')());

//__dirname = location of the script
app.use(require(__dirname + '/config/router')(express.Router()));



//server that listens to the request user
var server = app.listen(5000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s%s',host,port);
});

