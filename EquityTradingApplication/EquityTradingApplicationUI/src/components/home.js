import React, {Component} from 'react'
import '../styles/navBar.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state={
      user:{}
    }
}

 requestHeaders() {
     return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
  }

componentWillMount(){
  const headers = this.requestHeaders();
  let userId =this.props.params.userName;
 fetch('http://localhost:8080/user?userId='+userId,{
     method: 'GET',
     headers: headers
  }).then(response=>response.json()).then(responseJson=>{  
  if(responseJson.status==200){
      this.setState({
          user : responseJson.entity
  });
}else if(responseJson.status==401){
 localStorage.removeItem("jwt");
  localStorage.removeItem("userId");
   this.props.history.replace('/');
}
});}

logout(event){
  localStorage.removeItem("jwt");
   localStorage.removeItem("userId");
  this.props.history.replace('/');
}

renderEquities()
{
  var connection = new WebSocket('ws://localhost:8090/equity');
   connection.onopen = function () {
   connection.send('Ping');
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error.data);
};

// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
}



  render () {
    return (
      <div>
<nav className="navbar navbar-inverse bg-primary">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Equity Trading Application</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="nav-item active"><a href="#">Home</a></li>
      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#" onClick= {this.logout.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
    </ul>

    <div>
      <p className = "navbar-text navbar-right">
         Hi, {this.state.user.name}
      </p>
   </div>
<div>    </div>
  </div>
</nav>

{this.renderEquities()}

</div>
    )
  }
}
 
export default Home;