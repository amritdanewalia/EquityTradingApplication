import React from 'react';
import  'react-bootstrap-table'

import Dialog from 'react-bootstrap-dialog'
import Popup from 'react-popup';
import { connect } from "react-redux";
import {ORDERS_URL} from './serviceUrlConstants';
import {SEND_ORDERS_URL} from './serviceUrlConstants';

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
 sendData(cell, row){
fetch(SEND_ORDERS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({
    orderId: row.orderId,
    symbol: row.symbol,
    price: row.price,
    side: row.side,
    orderType: row.orderType,
    accountType: row.accountType,
    portfolio: row.portfolio,
    quantity: row.quantity
  })

}).then(response=>{
if(response.status==200){
  this.refs.sucessDialog.show({
  title: 'Success',
  body: <h4>Order Sucessfully Sent</h4>,
  actions: [
    Dialog.OKAction()
  ],
  bsSize: 'small',
  onHide: (dialog) => {
    dialog.hide()
    console.log('closed by clicking background.')
  }
})
}else{
  this.refs.failureDialog.show({
  title: 'Failure',
  body: <h4>Order Delivery Failed</h4>,
  actions: [
    Dialog.OKAction()
  ],
  bsSize: 'small',
  onHide: (dialog) => {
    dialog.hide()
    console.log('closed by clicking background.')
  }
})
}
})
}

 sendButtonFormatter(cell, row){
  return <button className="btn btn-sm btn-primary btn-block" type="submit" onClick={() => this.sendData(cell, row)}>Send</button>;
}
deleteButtonFormatter(cell, row){
  return '<button class="btn btn-sm btn-primary btn-block" type="submit">Delete</button> ';
}
    render() {
        return (
     <div>
      <Dialog ref='dialog' />
      <Dialog ref='sucessDialog' />
      <Dialog ref='failureDialog' />
      <BootstrapTable data={this.props.orders} striped={true} hover={true} pagination search >
       <TableHeaderColumn dataField="symbol" isKey={true}  dataSort={true}>Symbol</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
        <TableHeaderColumn dataField="side" dataSort={true}>Side</TableHeaderColumn>
        <TableHeaderColumn dataField="orderType" dataSort={true}>Order Type</TableHeaderColumn>
        <TableHeaderColumn dataField="accountType" dataSort={true} >Account Type</TableHeaderColumn>
        <TableHeaderColumn dataField="portfolio" dataSort={true} >Portfolio</TableHeaderColumn>
       <TableHeaderColumn dataField="quantity" dataSort={true} >Quantity</TableHeaderColumn>
       <TableHeaderColumn dataField="button" dataFormat={this.sendButtonFormatter.bind(this)}>Send</TableHeaderColumn>
       <TableHeaderColumn dataField="button" dataFormat={this.deleteButtonFormatter}>Delete</TableHeaderColumn>
       </BootstrapTable>
     </div>
       )
    }

  
}

export default OrdersTable;