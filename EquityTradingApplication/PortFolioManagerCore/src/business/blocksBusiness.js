var blocks =require('../models/blocks');
var messagePublisher =require('./messagePublisher');
var blocksBusiness = module.exports;
module.exports.addBlock=function(orders,callback){
var totalQuantity=0;
for(var i in orders)
{
totalQuantity = totalQuantity + orders[i].quantity;
}
var block={"symbol":orders[0].symbol, "side":orders[0].side,"price":0,"orderType":orders[0].orderType,"quantity":totalQuantity,"orders":orders};
blocks.create(block,callback);
}

module.exports.sendBlocks=function(blocks,callback){
messagePublisher.publish("", "blocks", new Buffer.from(JSON.stringify(blocks)),callback);
}



