import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    constructor(props) {
    super(props);
        this.taskTitle = props.taskTitle;
        this.taskDate = props.taskDate;
        this.taskId = props.taskId;
    }
    
    removeTask(id){
        const response = window.confirm('Estar seguro de eliminar la tarea');
        if(response){
            this.props.onRemoveTask(id);
        }
    }

    render(props) {
    return (
        <tr>
            <th scope="row"><i className="material-icons">check_circle_outline</i></th>
            <td className="hand" >{this.taskTitle}</td>
            <td>{this.taskDate}</td>
            <td>
              <i className="material-icons iDark">edit</i>
              <i className="material-icons" onClick={() => this.removeTask(this.taskId)}>delete_outline</i>
            </td>
        </tr>
    )
    }
    
    }
    
    export default Task;