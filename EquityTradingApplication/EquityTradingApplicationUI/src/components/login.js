import React, {Component} from 'react'
import Home from './home';
import '../styles/login.css'
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import browserHistory from "react-router";;

class Login extends Component {
  constructor (props) {
    super(props)
  this.state={
    errorMessage : ""
  }
}

validateCredentials(event){
  event.preventDefault();

 fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({
    userId: this.refs.userNameText.value,
    password: this.refs.passwordText.value,
  })

}).then(response=>response.json()).then(responseJson=>{  
  if(responseJson.status!=200){
      this.setState({
          errorMessage : "Invalid userId/Password"
  });
    }else{
    this.props.history.replace("/home");

    }})

}

  render () {
    return (
<div className="wrapper">
    <form className="form-signin" onSubmit ={this.validateCredentials.bind(this)}>     
    <strong className="text-danger">{this.state.errorMessage}</strong>
      <h2 className="form-signin-heading">Please login</h2>
      <input type="email" className="form-control" name="username" placeholder="Email Address" required="true" autofocus="" ref="userNameText"/>
      <input type="password" className="form-control" name="password" placeholder="Password" required="true" ref="passwordText"/>      
      <label className="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
      </label>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
  </div>
    )
  }
}
 
export default Login;