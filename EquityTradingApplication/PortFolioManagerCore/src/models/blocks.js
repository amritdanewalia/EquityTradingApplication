var mongoose = require('mongoose');

var blockSchema=mongoose.Schema({
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
	quantity:{
		type:Number,
		required:true
	},
	orders:{
	type:Object,
	required: true
	}
});

var Blocks =module.exports =mongoose.model('blocks',blockSchema);
module.exports.addBlocks=function(block,callback){
	Blocks.create(block,callback);
}

module.exports.getBlocks=function(callback){
	Blocks.find(callback);
}