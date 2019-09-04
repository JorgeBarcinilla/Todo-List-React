import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Table from './components/Table/Table'

class App extends Component{

  constructor() {
    super();
    this.state = {
      tasks: [
        {taskId:0, taskTitle:'Parcial de automatas', taskDate:'02-10-2019', taskDesc:'Todos estamos clavaos'},
        {taskId:1, taskTitle:'Parcial de IOT', taskDate:'03-10-2019', taskDesc:'Todos estamos bien'}
      ]
    }
  }

render() {
  return (
    <div classname="tasksContainer">
      <div classname="tasksHeader">
          <Header
            cantTasks={this.state.tasks.length}
          />
      </div>
      <div classname="tasksBody">
        <Table
          tasks = {this.state.tasks}
        />
      </div>
      <div classname="tasksFooter">
      
      </div>
    </div>
  );
}
  
}

export default App;
