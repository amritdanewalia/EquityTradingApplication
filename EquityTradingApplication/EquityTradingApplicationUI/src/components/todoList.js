import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        value : props.name.value,
       isEditable: props.name.isEditable
        }

    }
delete(event){
    this.props.delete(this.props.name);
}
edit(event){
    this.setState({
    isEditable : !this.state.isEditable
    });
}

save(event){
    this.props.save(this.state.value, this.props.name);
    this.setState({
    isEditable : !this.state.isEditable
    });

}
cancel(event){
    this.setState({
    isEditable : !this.state.isEditable
    });
}
textChange(event){
      this.setState({
    value : event.target.value,
    });
}
renderAction(){
     if(this.state.isEditable){
    return <td> {this.props.name.value}</td>  
    }
    else{
     return  <td> <input type ="text" value={this.state.value} onChange={this.textChange.bind(this)}/></td>  
    }
}

renderAbout(){
      if(this.state.isEditable){ 
    return <td> <button className ="btn btn-primary btn-sm" onClick={this.edit.bind(this)}>Edit</button> <button className ="btn btn-primary btn-sm" onClick={this.delete.bind(this)}>Delete</button> </td> 
    }
    else{
  return  <td> <button className ="btn btn-primary btn-sm" onClick={this.save.bind(this)}>Save</button>  <button className ="btn btn-primary btn-sm" onClick={this.cancel.bind(this)}>Cancel</button> </td> 
    }
}
    render() {
        return (
            <tr>  
            {this.renderAction()}
            {this.renderAbout()}
            </tr>
        );
    }

  
}

export default TodoList;