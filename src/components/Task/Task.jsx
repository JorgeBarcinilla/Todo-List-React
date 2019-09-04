import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    constructor(props) {
    super(props);
        this.taskTitle = props.taskTitle;
        this.taskDate = props.taskDate;
    }
    
    render(props) {
    return (
        <tr>
            <th scope="row"><i class="material-icons">check_circle_outline</i></th>
            <td class="hand" >{this.taskTitle}</td>
            <td>{this.taskDate}</td>
            <td>
              <i class="material-icons iDark">edit</i>
              <i class="material-icons">delete_outline</i>
            </td>
        </tr>
    )
    }
    
    }
    
    export default Task;