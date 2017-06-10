import React from 'react';
import EquitiesTableRow from './equitiesTableRow';

class EquitiesTable extends React.Component {
    constructor(props) {
        super(props);

    }

componentWillMount(){
$(document).ready(function() {
    $('#equityTableId').DataTable();
} );}

 

    render() {
 var tableStyle = {
  cellspacing:'0',
  width:'100%'
};
        return (
        <div>
        <table id="equityTableId" className="table table-striped table-bordered" style={tableStyle}>
        <thead>
            <tr>
                <th>Symbol</th>
                <th>LTP</th>
                <th>% Change</th>
                <th>Prev. Close</th>
                <th>Exchange</th>
            </tr>
        </thead>
        <tbody>
         {this.props.equities.map((equity,index)=> <EquitiesTableRow key={index} equity ={equity}/>)} 
            </tbody>
            </table>
        </div>
       )
    }

  
}

export default EquitiesTable;