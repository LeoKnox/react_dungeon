import React, {Component} from "react"

class Door extends Component {
    constructor() {
        super() 
            this.state = {
                doors: []
            }
    }

    thisDoor = (e) => {
        e.preventDefault();
        console.log('run');
    }

    render(props) {
        console.log('t'+ props);
        return (
            <div id={props}>
                <input type="text" id={props} onClick={this.thisDoor.bind(this)} ></input>
            </div>
        )
    }
}

export default Door;