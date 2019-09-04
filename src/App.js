import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import TaskForm from "./components/TaskForm/TaskForm";
import Table from './components/Table/Table';
import Footer from "./components/footer/Footer";


class App extends Component{

  constructor() {
    super();
    this.state = {
      tasks: [
        {taskId:0, taskTitle:'Parcial de automatas', taskDate:'02-10-2019', taskDesc:'Todos estamos clavaos'},
        {taskId:1, taskTitle:'Parcial de IOT', taskDate:'03-10-2019', taskDesc:'Todos estamos bien'}
      ]
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task){
    let {tasks} = this.state;
    tasks.push({
      tasksId: tasks.length + 1,
      taskTitle:task.taskTitle, 
      taskDate:task.taskDate, 
      taskDesc:task.taskDesc
    })
    this.setState({tasks})
  }

render() {
  return (
    <div className="tasksContainer">
      <div className="tasksHeader">
          <Header
            cantTasks={this.state.tasks.length}
          />
      </div>
      <div className="tasksBody">
        <TaskForm onAddTask={this.addTask}/>
        <Table
          tasks = {this.state.tasks}
        />
      </div>
      <div className="tasksFooter">
        <Footer/>
      </div>
    </div>
  );
}
  
}

export default App;
