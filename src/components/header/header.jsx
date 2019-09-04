import React, { Component } from 'react';
import './Header.css';
import Date_format from "../../helpers/date-format";

class Header extends Component {

constructor(props) {
super(props);
this.cantTasks = props.cantTasks;
this.date = new Date();
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
                <Date_format 
                    date = {this.date}
                />
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