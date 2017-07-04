import React, {Component} from 'react'
import '../styles/navBar.css'
import OrdersTable from './ordersTable';
import { connect } from "react-redux";
import Link from "react-router";
import {ORDERS_URL} from './serviceUrlConstants';

@connect((store) => {
  return {
    orders:store.orders.orders
  };
})
class Orders extends Component {
  constructor (props) {
    super(props)
}

 requestHeaders() {
     return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
  }

componentWillMount(){
  const headers = this.requestHeaders();
 fetch(ORDERS_URL,{
     method: 'GET',
     headers: headers
  }).then(response=>response.json()).then(responseJson=>{  
  if(responseJson.status==200){
  this.props.dispatch({type:"FETCH_ORDERS_SUCCESS",payload:responseJson.entity});
}else if(responseJson.status==401){
 localStorage.removeItem("jwt");
  localStorage.removeItem("userId");
   this.props.history.replace('/');
}
});
}



  render () {
    return (
      <div>
      <OrdersTable orders={this.props.orders}/>
</div>
    )
  }
}
 
export default Orders;