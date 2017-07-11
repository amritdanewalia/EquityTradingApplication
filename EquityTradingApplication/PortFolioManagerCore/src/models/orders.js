var mongoose = require('mongoose');

var ordersSchema=mongoose.Schema({
	orderId:{
		type:Number,
		required:true
	},
	symbol:{
		type:String,
		required:true
	},
	price:{
		type:Number,
		required:true
	},
	side:{
		type:String,
		required:true
	},
	orderType:{
		type:String,
		required:true
	},
	accountType:{
		type:String,
		required:true
	},
	portfolio:{
		type:String,
		required:true
	},
	quantity:{
		type:Number,
		required:true
	}
});

var Orders =module.exports =mongoose.model('orders',ordersSchema);
module.exports.addOrders=function(order,callback){
	Orders.create(order,callback);
}

module.exports.getOrders=function(callback){
	Orders.find(callback);
}