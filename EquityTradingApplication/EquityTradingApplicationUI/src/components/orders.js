import React, {Component} from 'react'
import '../styles/navBar.css'
import EquitiesTable from './equitiesTable';
import { connect } from "react-redux";
import Link from "react-router";

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
  console.log("nai ho");
  const headers = this.requestHeaders();
 fetch('http://localhost:8080/orders',{
     method: 'GET',
     headers: headers
  }).then(response=>response.json()).then(responseJson=>{  
  if(responseJson.status==200){
  this.props.dispatch({type:"FETCH_ORDERS_SUCCESS",payload:responseJson.entity});
}else if(responseJson.status==401){
 
}
});
}



  render () {
    return (
      <div>
      Hello
</div>
    )
  }
}
 
export default Orders;