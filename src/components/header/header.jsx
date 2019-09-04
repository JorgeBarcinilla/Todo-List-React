import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

constructor(props) {
super(props);
this.cantTasks = props.cantTasks;
}

render(props) {
return (
<header>
    <nav className="navbar navbar-light">
        <div className="nav-left-section">
            <a className="navbar-brand">
                <h2>ToDo List</h2>
            </a>
            <div className="data">
                <h4>{this.cantTasks} Incomplete Task</h4>
                <span> fecha </span>
            </div>
        </div>

        <div className="menu">
            <a href="#" className="btn" id="btn-incompleted-task">
                Incompleted Task
            </a>
            <a href="#" className="btn" id="btn-incompleted-task">
                Completed Task
            </a>
        </div>
    </nav>
</header>
)
}

}

export default Header;