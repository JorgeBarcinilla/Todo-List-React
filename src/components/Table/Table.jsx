import React, { Component } from 'react';
import './Table.css';
import Task from "../Task/Task";

class Table extends Component {

    constructor(props) {
    super(props);
        this.tasks = props.tasks;
        this.onRemoveTask = this.props.onRemoveTask;
    }
    
    render(props) {
    return (
        <div className="container-fluid">
        <table className="table" id="#myTable">
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
                        taskId = {task.taskId}
                        onRemoveTask = {this.onRemoveTask}
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