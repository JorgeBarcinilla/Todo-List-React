import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'

class App extends Component{

  constructor() {
    super();
    this.state = {
      tasks: [
        {taskId:0, taskTitle:'Parcial de automatas', date:'02-10-2019', desc:'Todos estamos clavaos'},
        {taskId:1, taskTitle:'Parcial de IOT', date:'03-10-2019', desc:'Todos estamos bien'}
      ]
    }
  }

render() {
  return (
    <div classname="tasksContainer">
      <div classname="tasksHeader">
          <Header
            cantTasks={this.state.tasks.length()}
          />
      </div>
      <div classname="tasksBody">
      <ul>
        {
          this.state.tasks.map(task => {
            return(
              <li>{task.taskTitle}</li>
            )
          })
        }
      </ul>
      </div>
      <div classname="tasksFooter">
      
      </div>
    </div>
  );
}
  
}

export default App;
