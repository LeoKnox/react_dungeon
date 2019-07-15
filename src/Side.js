import React, {Component} from "react";

class Side extends Component {
    constructor() {
        super()
        this.state={
            roomName: "",
            width: "",
            height: "",
        }
        this.readValue = this.readValue.bind(this);
    }

    onChangeValue(e) {
        e.preventDefault();
        this.props.changeValue(this.state);
    }

    createDoor() {
        let newDoor = document.createElement("LI");
        let doorNode = document.createTextNode("hello");
        newDoor.appendChild(doorNode);
        document.getElementById("doors").appendChild(newDoor); 
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
                        value={this.state.width}
                        name="width"
                        onChange={this.readValue}
                    />
                </p>
                <p>Height:
                    <input
                        type="text"
                        value={this.state.height}
                        name="height"
                        onChange={this.readValue}
                    />
                </p>
                <p>Doors:
                    <input
                        type="number"
                        placeholder="0"
                        min="0"
                        onClick={this.createDoor}
                    />
                </p>
                <ul id="doors"></ul>
                <button onClick={this.onChangeValue.bind(this)}>Update</button>
            </form>
        )
    }
}

export default Side;