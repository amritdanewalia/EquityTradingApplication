import React from 'react';
import TodoHeader from './todoHeader';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todos: [],
            value:""
        };

    }

push(event){
event.preventDefault();
var oldTodos = this.state.todos.slice();
oldTodos.push({value:this.state.value,isEditable:true});
this.setState({
todos:oldTodos,
value:""
});
}

delete(value){
var index = this.state.todos.indexOf(value);
var oldTodos = this.state.todos.slice();
oldTodos.splice(index,1);
this.setState({
    todos:oldTodos
});
}
save(value, old){
var index = this.state.todos.indexOf(old);
var oldTodos =this.state.todos.slice();
oldTodos[index].value=value;
this.setState({
    todos:oldTodos
}); 
}
handleChange(event){

    this.setState({
        value:event.target.value
    });
}
    render() {
        return (
            <div>
            <Popup/>
                <h1>React ToDo App</h1>
                <form onSubmit ={this.push.bind(this)}>
                <input type="text" name ="textBox" onChange={this.handleChange.bind(this)} value={this.state.value} />
                <input type ="submit" value="Create" className ="btn btn-primary btn-md"/>
                </form>
                <TodoHeader todos ={this.state.todos} delete={this.delete.bind(this)} save ={this.save.bind(this)}/>
            </div>
        );
    }

  
}

export default App;