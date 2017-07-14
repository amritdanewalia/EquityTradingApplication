import React, {Component} from 'react'
import '../styles/navBar.css'
import ViewBlocksTable from './viewBlocksTable';
import { connect } from "react-redux";
import Link from "react-router";
import {GET_BLOCKS_URL} from './serviceUrlConstants';

@connect((store) => {
  return {
    blocks:store.blocks.blocks
  };
})
class ViewBlocks extends Component {
  constructor (props) {
    super(props)
}


componentWillMount(){
console.log("hi");
 fetch(GET_BLOCKS_URL,{
     method: 'GET'
  }).then(response=>{
  if(response.status==200){
     response.json().then(function(data) {
          this.props.dispatch({type:"FETCH_BLOCKS_SUCCESS",payload:data});
        }.bind(this));

}
});
}

  render () {
    return (
      <div>
      <ViewBlocksTable blocks={this.props.blocks}/>
</div>
    )
  }
}

export default ViewBlocks;