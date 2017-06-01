import React, {Component} from 'react'
import '../styles/login.css'

class Login extends Component {
  constructor (props) {
    super(props)
  this.state={
    errorMessage : ""
  }
}

validateCredentials(event){
    event.preventDefault();
var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://localhost:8080/login', true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/json");

xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        var response =xhr.responseText;
        console.log(xhr.response.status);
        if(xhr.responseText.status!==200){
            console.log("not 200")
      this.setState({
          errorMessage : "Invalid userId/Password"
  });
        }else{
            this.setState({
    errorMessage : ""
  });
        }
    }
}.bind(this);
xhr.send(JSON.stringify({
    userId: this.refs.userNameText.value,
    password: this.refs.passwordText.value,
  })); 

 /*fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({
    userId: this.refs.userNameText.value,
    password: this.refs.passwordText.value,
  })

}).then(response => response).then(data=>console.log(data.status));*/
 
  //console.log(this.POST('http://localhost:8080/login', { this.refs.userNameText, this.refs.passwordText });

}
  render () {
    return (
    <div className="wrapper">
    <form className="form-signin" onSubmit ={this.validateCredentials.bind(this)}>     
    <div >{this.state.errorMessage}</div>
      <h2 className="form-signin-heading">Please login</h2>
      <input type="text" className="form-control" name="username" placeholder="Email Address" required="true" autofocus="" ref="userNameText"/>
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