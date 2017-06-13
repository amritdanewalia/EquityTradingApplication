import React from 'react';
import  'react-bootstrap-table'
import '../styles/button.css'
import Dialog from 'react-bootstrap-dialog'

class EquitiesTable extends React.Component {
    constructor(props) {
        super(props);

    }
 
    render() {
var options = {
     onRowClick: function(row){
 		             this.refs.dialog.show({
                     title: 'Create Order',
                     body: <div> <h3><div className="label label-info lg">Equity :{row.t}</div></h3>
                         
                           <h3><div className="label label-info lg">Price  :{row.l}</div></h3></div>,

                     actions: [
                             Dialog.CancelAction(),
                             Dialog.Action('Save',() => {
                             console.log('OK was clicked!')
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
     </div>
       )
    }

  
}

export default EquitiesTable;