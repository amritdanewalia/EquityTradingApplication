import React, {Component} from 'react'
import '../styles/navBar.css'
import {Link} from "react-router";
import { connect } from "react-redux";
import {GET_USER_URL} from './serviceUrlConstants';

@connect((store) => {
  return {
    user:store.user.user,
  };
})
class Home extends Component {
  constructor (props) {
    super(props)
}

 requestHeaders() {
     return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
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
}

logout(event){
  localStorage.removeItem("jwt");
   localStorage.removeItem("userId");
  this.props.history.replace('/');
}


  render () {
    return (
      <div>
<nav className="navbar navbar-inverse bg-primary">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/main/home">Equity Trading Application</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="nav-item active"><Link to ="/main/home">Home</Link></li>
      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Execution Blocks <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><Link to ="/main/blocks">Create Block</Link></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><Link to ="/main/orders">View Orders</Link></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#" onClick= {this.logout.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
    </ul>

    <div>
      <p className = "navbar-text navbar-right">
         Hi, {this.props.user.name}
      </p>
   </div>
<div>    </div>
  </div>
</nav>
{this.props.children}
</div>
    )
  }
}
 
export default Home;