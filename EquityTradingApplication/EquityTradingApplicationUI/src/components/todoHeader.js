import React from 'react';
import TodoList from './todoList';

class TodoHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
            <thead>
            <tr>
            <th>Task</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>{this.props.todos.map((name,index) =><TodoList key={index} name={name} delete={this.props.delete} save ={this.props.save}/>)}
             </tbody>
               </table>
</div>
        );
    }

  
}

export default TodoHeader;