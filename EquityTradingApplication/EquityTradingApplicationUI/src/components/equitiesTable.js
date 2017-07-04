import React from 'react';
import  'react-bootstrap-table'
import '../styles/button.css'
import Dialog from 'react-bootstrap-dialog'
import EquitiesTablePopup from './equitiesTablePopup';
import Popup from 'react-popup';
import { connect } from "react-redux";
import {GET_USER_URL,EQUITY_URL,ORDERS_URL} from './serviceUrlConstants';

@connect((store) => {
  return {
    user:store.user.user,
    equities:store.equities.equities
  };
})
class EquitiesTable extends React.Component {
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
componentWillMount(){
  const headers = this.requestHeaders();
  let userId =localStorage.userId;
 fetch(GET_USER_URL+userId,{
     method: 'GET',
     headers: headers
  }).then(response=>response.json()).then(responseJson=>{  
  if(responseJson.status==200){
  this.props.dispatch({type:"FETCH_USER_SUCCESS",payload:responseJson.entity});
}else if(responseJson.status==401){
 localStorage.removeItem("jwt");
  localStorage.removeItem("userId");
   this.props.history.replace('/');
}
});
var connection = new WebSocket(EQUITY_URL);
   connection.onopen = function () {
   connection.send('Ping');
};

connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

connection.onmessage = function (e) {
  this.props.dispatch({type:"FETCH_EQUITIES_SUCCESS",payload:e.data.replace("//","").trim()});
}.bind(this);
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
    symbol:row.t,
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
      <BootstrapTable data={this.props.equities} striped={true} hover={true} pagination options={options} search >
       <TableHeaderColumn dataField="t" isKey={true}  dataSort={true}>Symbol</TableHeaderColumn>
        <TableHeaderColumn dataField="l" dataSort={true}>LTP</TableHeaderColumn>
        <TableHeaderColumn dataField="cp" dataSort={true}>% Change</TableHeaderColumn>
        <TableHeaderColumn dataField="pcls_fix" dataSort={true}>Prev. Close</TableHeaderColumn>
        <TableHeaderColumn dataField="e" dataSort={true} >LTP</TableHeaderColumn>
       </BootstrapTable>
     </div>
       )
    }

  
}

export default EquitiesTable;