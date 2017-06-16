import React, {Component} from 'react'
import '../styles/navBar.css'

class EquitiesTablePopup extends Component {
  constructor (props) {
    super(props)
}

setSide(event){
this.props.setSide(event.target.value);
console.log(this.props);
}

setOrderType(event){
this.props.setOrderType(event.target.value);
}

setAccountType(event){
this.props.setAccountType(event.target.value);
}
setPortfolio(event){
  this.props.setPortfolio(event.target.value);
  }
  setQuantity(event){
     this.props.setQuantity(event.target.value);
  }
  setComments(event){
     this.props.setComments(event.target.value);
  }
  render () {
    return (
     <div className="modal-body">
     <div className="custom">
   <div className="col-md-6 col-sm-6 col-xs-12">

                     <form className="form-horizontal">

                     <div className="form-group" id="div_radio">
      <label className="control-label ">
       Equity
      </label>
      <div className="">
        {this.props.equity.t}
      </div>
     </div>
<div className="form-group" id="div_radio">
     <label className="control-label ">
       Price
      </label>
      <div className="">
        {this.props.equity.l}
      </div>
     </div>
                          <div className="form-group" id="div_radio">
      <label className="control-label " for="side">
       Side
      </label>
      <div className="">
       <label className="radio-inline">
        <input name="side" type="radio" value="Buy" defaultChecked={true} onClick={this.setSide.bind(this)}/>
        Buy 
       </label>
       <label className="radio-inline">
        <input name="side" type="radio" value="Sell" onClick={this.setSide.bind(this)}/>
        Sell 
       </label>
      </div>
     </div>

     <div className="form-group">
      <label className="control-label " for="select">
       Order Type
      </label>
      <select className="select form-control" id="select" name="select" onChange={this.setOrderType.bind(this)}>
       <option value="Market Order">
        Market Order
       </option>
       <option value="Limit Order">
        Limit Order
       </option>
       <option value="Stop Order">
        Stop Order
       </option>
       <option value="Stop Limit Order">
        Stop Limit Order
       </option>
      </select>
     </div>
     <div className="form-group" id="div_radio">
     <label className="control-label ">
       Trader
      </label>
      <div className="">
       {this.props.traderUserName}
      </div>
     </div>
<div className="form-group" id="div_radio">
      <label className="control-label " for="accountType">
       Account Type
      </label>
      <div className="">
       <label className="radio-inline">
        <input name="accountType" type="radio" value="Cash" defaultChecked={true} onClick={this.setAccountType.bind(this)}/>
        Cash 
       </label>
       <label className="radio-inline">
        <input name="accountType" type="radio" value="Margin" onClick={this.setAccountType.bind(this)}/>
        Margin 
       </label>
      </div>
     </div>
     <div className="form-group">
      <label className="control-label " for="selectPortfolio">
       Portfolio
      </label>
      <select className="select form-control" id="selectPortfolio" name="select" onChange={this.setPortfolio.bind(this)}>
       <option value="Aggressive Portfolio">
        Aggressive Portfolio
       </option>
       <option value="Defensive Portfolio">
        Defensive Portfolio
       </option>
       <option value="Income Portfolio">
        Income Portfolio
       </option>
       <option value="Speculative Portfolio">
        Speculative Portfolio
       </option>
       <option value="Hybrid Portfolio">
        Hybrid Portfolio
       </option>
      </select>
     </div>
 <div className="form-group ">
      <label class="control-label " for="quantity">
       Quantity
      </label>
      <input className="form-control" id="quantity" name="quantity" type="text" onChange={this.setQuantity.bind(this)}/>
     </div>
  <div className="form-group">
      <label className="control-label " for="textarea">
       Comments
      </label>
      <textarea className="form-control" cols="20" id="textarea" name="textarea" rows="2" onChange={this.setComments.bind(this)}></textarea>
     </div>
                          </form></div></div></div>
    )
  }
}
 
export default EquitiesTablePopup;