import React from 'react';
import  'react-bootstrap-table'
import '../styles/button.css'
import Dialog from 'react-bootstrap-dialog'
import Popup from 'react-popup';
import { connect } from "react-redux";
import {SEND_BLOCKS_URL} from './serviceUrlConstants';


class ViewBlocksTable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        selectedRows:[]
        }
    }

sendBlock(){
var selection= this.state.selectedRows;
fetch(SEND_BLOCKS_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify(selection)

}).then(response=>{
if(response.status==200){
  this.refs.sucessDialog.show({
  title: 'Success',
  body: <h4>Block Sucessfully Sent</h4>,
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
  body: <h4>Block Delivery Failed</h4>,
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

    render() {
    var selectRowProp = {
                mode: "checkbox",
                clickToSelect: true,
                selected: false,
                 onSelect: function(row, isSelected, e) {
                                    if(isSelected){
                                    var rows = this.state.selectedRows.slice();
                                    rows.push(row);
                                    this.setState({
                                    selectedRows : rows
                                    });
                                    }else{
                                    var index = this.state.selectedRows.indexOf(row);
                                    var oldSelectedRows = this.state.selectedRows.slice();
                                    oldSelectedRows.splice(index,1);
                                     this.setState({
                                              selectedRows : oldSelectedRows });
                                    }
                                    }.bind(this)
            };
        return (
     <div>
        <Dialog ref='sucessDialog' />
           <Dialog ref='failureDialog' />
      <BootstrapTable data={this.props.blocks} striped={true} hover={true} pagination selectRow={selectRowProp} search >
      <TableHeaderColumn dataField="_id" isKey={true} hidden ={true}>OrderId</TableHeaderColumn>
       <TableHeaderColumn dataField="symbol" dataSort={true}>Symbol</TableHeaderColumn>
        <TableHeaderColumn dataField="price" dataSort={true}>Price</TableHeaderColumn>
        <TableHeaderColumn dataField="side" dataSort={true}>Side</TableHeaderColumn>
        <TableHeaderColumn dataField="orderType" dataSort={true}>Order Type</TableHeaderColumn>
       <TableHeaderColumn dataField="quantity" dataSort={true} >Quantity</TableHeaderColumn>
       </BootstrapTable>

     <div className = 'bottom-right'><button className="btn btn-md btn-primary btn-block pull-right" onClick={this.sendBlock.bind(this)} type="submit">Send Block</button></div>
     </div>
       )
    }


}

export default ViewBlocksTable;