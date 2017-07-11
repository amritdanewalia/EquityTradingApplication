var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var orders = require('./models/orders');
app.use(bodyParser.json());
mongoose.connect('localhost:27017/amrit');
var db = mongoose.connection;

app.post('/orders',function(req,res){
var order = req.body;
console.log("orders"+order);
orders.addOrders(order, function(err,result){
if(err){
	throw err;
}
res.sendStatus(200);
})

});

app.get('/orders',function(req,res){
orders.getOrders(function(err,result){
if(err){
	throw err;
}
res.json(result);
})

});
app.listen(3001);