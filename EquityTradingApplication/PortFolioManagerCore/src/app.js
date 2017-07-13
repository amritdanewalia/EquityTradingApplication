var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
var orders = require('./models/orders');
var blocksBusiness = require('./business/blocksBusiness');
app.use(bodyParser.json());
mongoose.connect('localhost:27017/portfoliomanagercore');
var db = mongoose.connection;

app.post('/orders',function(req,res){
var order = req.body;
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
res.status(200);
res.json(result);
})

});

app.post('/blocks',function(req,res){
var orders = req.body;
blocksBusiness.addBlock(orders, function(err,result){
if(err){
	throw err;
}
res.sendStatus(200);
})

});

app.listen(3001);