import React, { Component } from 'react';
import './TaskForm.css';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskId: '', 
            taskTitle: '', 
            taskDate: '', 
            taskDesc: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleUserInput(e) {
        console.log(e.target.value, e.target.name)
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    addTask() {
        console.log(this.state);
        this.props.onAddTask(this.state);
        this.titleInput.value = "";
        this.dateInput.value = "";
        this.descInput.value = "";
        this.titleInput.focus();
    }

    componentDidMount() {
        this.titleInput.focus();
    }

render(props) {
return (
<div className="container-fluid form-add-task text-center">
    <h4>Create task</h4>
    <div className="row ">
        <div className="col-6">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="form-group col-6">
                        <input placeholder="Write a task title" className="taskInput form-control" ref={input=> {
                        this.titleInput = input;}}
                        name="taskTitle"
                        onChange={this.handleUserInput}
                        type="text"/>
                    </div>
                    <div className="form-group col-6">
                        <input className="taskInput form-control" ref={input=> { this.dateInput = input;}}
                        name="taskDate"
                        onChange={this.handleUserInput}
                        type="date"/>
                    </div>
                    <button onClick={this.addTask} className="btn btn-success">
                        Add Task
                    </button>
                </div>
            </div>

        </div>

        <div className="form-group col-6">
            <textarea placeholder="Write a task description" className="taskInput form-control" ref={input=> {this.descInput = input;}}
            name="taskDesc"
            onChange={this.handleUserInput}
            type="text"/>
        </div>
    </div>
    
</div>
)
}

}

export default TaskForm;