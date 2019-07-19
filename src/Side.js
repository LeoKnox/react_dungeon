import React, {Component} from "react";
import Door from "./Door";

class Side extends Component {
    constructor() {
        super()
        this.state={
            roomName: "",
            width: "",
            height: "",
            doorNum: 0,
            doors: []
        }
        this.readValue = this.readValue.bind(this);
        this.createDoor = this.createDoor.bind(this);
    }

    onChangeValue(e) {
        e.preventDefault();
        this.props.changeValue(this.state);
    }

    thisDoor = (addedDoor) => {
        console.log('today');
    }

    createDoor() {
        this.setState(prevState => {
            console.log(prevState.doors);
            prevState.doors.push(<Door newDoor={this.state} changeValue={this.thisDoor.bind(this)} />);
            return {
                doorNum: prevState.doorNum + 1,
                doors: prevState.doors
            }
        })
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
                        value={this.state.doors.length}
                        min="0"
                        onClick={this.createDoor}
                    />
                </p>
                <div id="doors">
                    {this.state.doors}
                </div>
                <button onClick={this.onChangeValue.bind(this)}>Update</button>
            </form>
        )
    }
}

export default Side;