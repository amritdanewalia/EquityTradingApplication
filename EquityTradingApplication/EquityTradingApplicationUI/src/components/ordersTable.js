import React from 'react';
import  'react-bootstrap-table'

import Dialog from 'react-bootstrap-dialog'
import Popup from 'react-popup';
import { connect } from "react-redux";
import {ORDERS_URL} from './serviceUrlConstants';

class OrdersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        	"side":"Buy",
             "orderType":"Market Order",
             "accountType":"Cash",
             "portfolio":"Aggressive Portfolio",
             "quantity":"",
             "comments":""
        }

    }

  requestHeaders() {
     return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
  }

setSide(value){
this.setState({
	side:value
});
}

setOrderType(value){
this.setState({
	orderType:value
});
}

setAccountType(value){
this.setState({
	accountType:value
});
}
setPortfolio(value){
this.setState({
	portfolio:value
});
}
setQuantity(value){
this.setState({
	quantity:value
});
}
setComments(value){
this.setState({
	comments:value
});
}
 sendButtonFormatter(cell, row){
  return '<button class="btn btn-sm btn-primary btn-block" type="submit">Send</button> ';
}
deleteButtonFormatter(cell, row){
  return '<button class="btn btn-sm btn-primary btn-block" type="submit">Delete</button> ';
}
    render() {

var options = {
     onRowClick: function(row){
 		             this.refs.dialog.show({
                     title: 'Create Order',
                     body: <EquitiesTablePopup equity={row} setSide={this.setSide.bind(this)} 
                     setOrderType={this.setOrderType.bind(this)} setAccountType={this.setAccountType.bind(this)}
                     setQuantity={this.setQuantity.bind(this)} setComments={this.setComments.bind(this)} traderUserName={this.props.user.name}/>
,

                     actions: [
                             Dialog.CancelAction(),
                             Dialog.Action('Save',() => {
                     fetch(ORDERS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${localStorage.jwt}`
  },
   body: JSON.stringify({
    equityId: row.id,
    symbol: row.t,
    price: row.l.replace(",",""),
    side:this.state.side,
    orderType:this.state.orderType,
    accountType:this.state.accountType,
    portfolio:this.state.portfolio,
    quantity:this.state.quantity,
    comments:this.state.comments,
    traderUserName:this.props.user.userId
  })

}).then(response=>response.json()).then(responseJson=>{  
  if(responseJson.status==200){
  	this.refs.sucessDialog.show({
  title: 'Success',
  body: <h4>Order Sucessfully Created</h4>,
  actions: [
    Dialog.OKAction()
  ],
  bsSize: 'small',
  onHide: (dialog) => {
    dialog.hide()
    console.log('closed by clicking background.')
  }
})
    }})
                              },'btn-info')
                              ],
                     bsSize: 'small',
                     onHide: (dialog) => {
                            
                             console.log('closed by clicking background.')
                                }
                               } )
 
                                }.bind(this)

                                 }
        return (
     <div>
      <Dialog ref='dialog' />
      <Dialog ref='sucessDialog' />
      <BootstrapTable data={this.props.orders} striped={true} hover={true} pagination options={options} search >
       <TableHeaderColumn dataField="symbol" isKey={true}  dataSort={true}>Symbol</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
        <TableHeaderColumn dataField="side" dataSort={true}>Side</TableHeaderColumn>
        <TableHeaderColumn dataField="orderType" dataSort={true}>Order Type</TableHeaderColumn>
        <TableHeaderColumn dataField="accountType" dataSort={true} >Account Type</TableHeaderColumn>
        <TableHeaderColumn dataField="portfolio" dataSort={true} >Portfolio</TableHeaderColumn>
       <TableHeaderColumn dataField="quantity" dataSort={true} >Quantity</TableHeaderColumn>
       <TableHeaderColumn dataField="button" dataFormat={this.sendButtonFormatter}>Send</TableHeaderColumn>
       <TableHeaderColumn dataField="button" dataFormat={this.deleteButtonFormatter}>Delete</TableHeaderColumn>
       </BootstrapTable>
     </div>
       )
    }

  
}

export default OrdersTable;