import React, {Component} from 'react'
import '../styles/navBar.css'
import BlocksTable from './blocksTable';
import { connect } from "react-redux";
import Link from "react-router";
import {BLOCK_ORDERS_URL} from './serviceUrlConstants';

@connect((store) => {
  return {
    blockOrders:store.blockOrders.blockOrders
  };
})
class Blocks extends Component {
  constructor (props) {
    super(props)
}


componentWillMount(){
 fetch(BLOCK_ORDERS_URL,{
     method: 'GET'
  }).then(response=>{
  if(response.status==200){
     response.json().then(function(data) {
          this.props.dispatch({type:"FETCH_BLOCK_ORDERS_SUCCESS",payload:data});
        }.bind(this));

}
});
}

  render () {
    return (
      <div>
      <BlocksTable blockOrders={this.props.blockOrders}/>
</div>
    )
  }
}

export default Blocks;