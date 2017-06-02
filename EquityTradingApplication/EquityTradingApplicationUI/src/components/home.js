import React, {Component} from 'react'

class Home extends Component {
  constructor (props) {
    super(props)
}

  render () {
    return (
  <nav classNameName="navbar navbar-default">
  <div classNameName="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Equity Trading Application</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Edit</a></li>
      <li><a href="#">Send</a></li>
      <li><a href="#">Ammend</a></li>
    </ul>
  </div>
  {this.props.children}
</nav>
    )
  }
}
 
export default Home;