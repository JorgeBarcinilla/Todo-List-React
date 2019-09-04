import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import TaskForm from "./components/TaskForm/TaskForm";
import Table from './components/Table/Table';
import Footer from "./components/footer/Footer";

import firebase from 'firebase/app';
import { DB_CONFIG } from './config/config';
import 'firebase/database';

class App extends Component{

  constructor() {
    super();
    this.state = {
      tasks: [
        //{taskId:0, taskTitle:'Parcial de automatas', taskDate:'02-10-2019', taskDesc:'Todos estamos clavaos'},
        //{taskId:1, taskTitle:'Parcial de IOT', taskDate:'03-10-2019', taskDesc:'Todos estamos bien'}
      ]
    }
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    //Conexion a firebase
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('tasks');
  }

  addTask(task){
    /*let {tasks} = this.state;
    tasks.push({
      tasksId: tasks.length + 1,
      taskTitle:task.taskTitle, 
      taskDate:task.taskDate, 
      taskDesc:task.taskDesc
    })
    this.setState({tasks})*/
    this.db.push().set({
      taskTitle:task.taskTitle, 
      taskDate:task.taskDate, 
      taskDesc:task.taskDesc
    })
  }

  removeTask(taskId){
    this.db.child(taskId).remove();
  }

  componentDidMount() {
		const { tasks } = this.state;
		this.db.on('child_added', task => {
			tasks.push({
        taskId: task.key,
				taskTitle: task.val().taskTitle,
        taskDate: task.val().taskDate,
        taskDesc: task.val().taskDesc
			});

			this.setState({tasks});
		});

		this.db.on('child_removed', task => {
			for(let i = 0; i < tasks.length; i++) {
				if(tasks[i].taskId === task.key) {
					tasks.splice(i , 1);
				}
			}
			console.log(tasks);
			this.setState({tasks});
		});

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
          onRemoveTask = {this.removeTask}
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
