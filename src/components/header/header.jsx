import React, { Component } from 'react';
import './Header.css';

class header extends Component {

constructor(props) {
super(props);
this.cantTasks = props.cantTasks;
}

render(props) {
return (
<header>
    <nav class="navbar navbar-light">
        <div class="nav-left-section">
            <a class="navbar-brand">
                <h2>ToDo List</h2>
            </a>
            <div class="data">
                <h4>{this.cantTasks} Incomplete Task</h4>
                <span> fecha </span>
            </div>
        </div>

        <div class="menu">
            <a href="#" class="btn" id="btn-incompleted-task">
                Incompleted Task
            </a>
            <a href="#" class="btn" id="btn-incompleted-task">
                Completed Task
            </a>
        </div>
    </nav>
</header>
)
}

}

export default header;