import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {

constructor(props) {
super(props);
this.tasks = props.tasks;
}

render(props) {
return (
<footer>
    <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <h2>
                    Title
                </h2>
            </div>
            <div className="col-6">
                <small>
                    Was completed on
                </small>
            </div>
        </div>
        <div className="row">
            <div className="col-10">
                <p>
                    jkahsdkjhksdjfhisudfhskdfjkdf
                </p>
            </div>
        </div>
        
    </div>
</footer>
)
}

}

export default Footer;