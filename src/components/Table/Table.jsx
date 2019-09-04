import React, { Component } from 'react';
import './Table.css';
import Task from "../Task/Task";

class Table extends Component {

    constructor(props) {
    super(props);
        this.tasks = props.tasks;
    }
    
    render(props) {
    return (
        <div class="container-fluid">
        <table class="table" id="#myTable">
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Complete By</th>
            <th>Actions</th>
          </tr>
        </thead>
  
        <tbody id="TableBody">
        {
            this.tasks.map(task => {
                return(
                    <Task
                        taskTitle = {task.taskTitle}
                        taskDate = {task.taskDate}
                    />
                )
            })
        }
        </tbody>
      </table>
      </div>
    )
    }
    
    }
    
    export default Table;