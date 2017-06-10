import React from 'react';

class EquitiesTableRow extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
        <tr>
          <td>{this.props.equity.t}</td>
          <td>{this.props.equity.l} </td>
          <td>{this.props.equity.cp} </td>
          <td>{this.props.equity.pcls_fix} </td>
          <td>{this.props.equity.e} </td>
        </tr>
       )
    }

  
}

export default EquitiesTableRow;