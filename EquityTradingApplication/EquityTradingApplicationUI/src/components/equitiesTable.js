import React from 'react';
import  'react-bootstrap-table'
import '../styles/button.css'
import Dialog from 'react-bootstrap-dialog'
import EquitiesTablePopup from './equitiesTablePopup';
import Popup from 'react-popup';

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
                     setQuantity={this.setQuantity.bind(this)} setComments={this.setComments.bind(this)} traderUserName={this.props.userName}/>
,

                     actions: [
                             Dialog.CancelAction(),
                             Dialog.Action('Save',() => {
                     fetch('http://localhost:8080/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${localStorage.jwt}`
  },
   body: JSON.stringify({
    equityId: row.id,
    price: row.l.replace(",",""),
    side:this.state.side,
    orderType:this.state.orderType,
    accountType:this.state.accountType,
    portfolio:this.state.portfolio,
    quantity:this.state.quantity,
    comments:this.state.comments,
    traderUserName:this.props.userName
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
      <BootstrapTable data={this.props.equities} striped={true} hover={true} pagination options={options} search >
       <TableHeaderColumn dataField="t" isKey={true}  dataSort={true}>Symbol</TableHeaderColumn>
        <TableHeaderColumn dataField="l" dataSort={true}>LTP</TableHeaderColumn>
        <TableHeaderColumn dataField="cp" dataSort={true}>% Change</TableHeaderColumn>
        <TableHeaderColumn dataField="pcls_fix" dataSort={true}>Prev. Close</TableHeaderColumn>
        <TableHeaderColumn dataField="e" dataSort={true} >LTP</TableHeaderColumn>
       </BootstrapTable>
         <Dialog ref='sucessDialog' />
     </div>
       )
    }

  
}

export default EquitiesTable;