import React, {Component} from "react";

class Side extends Component {
    constructor() {
        super()
        this.state={
            roomName: "",
            height: "",
            width: ""
        }
        this.readValue = this.readValue.bind(this);
    }

    onChangeValue(e) {
        e.preventDefault();
        this.props.changeValue(this.state.roomName)
    }

    readValue(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form id="dungeonStats">
                <p>Room Name:
                    <input
                        type="text"
                        value={this.state.roomName}
                        name="roomName"
                        onChange={this.readValue}
                    />
                </p>
                <p>Width:
                    <input
                        type="text"
                        placeholder="5"
                        value={this.state.firstName}
                        name="width"
                        onChange={this.readValue}
                    />
                </p>
                <p>Height:
                    <input type="text" placeholder="3"/>
                </p>
                <p>Doors:
                    <input type="text" />
                </p>
                <button onClick={this.onChangeValue.bind(this)}>Update</button>
                <h1>{this.state.roomName}</h1>
            </form>
        )
    }
}

export default Side;