import React, {Component} from "react"

class Door extends Component {

    thisDoor = (e) => {
        e.preventDefault();
        console.log('run');
    }

    render(props) {
        return (
            <input type="submit" value="add" id={props} onClick={this.thisDoor.bind(this)} />
        )
    }
}

export default Door;