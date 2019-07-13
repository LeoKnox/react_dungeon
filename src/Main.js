import React from "react";

function Main(props) {
    return (
        <div className="Main">
            <p className="roomName">Room name: {
                props.myName.newValues.roomName
            }</p>
            <p>{props.myName.newValues.width} by {props.myName.newValues.height}</p>
            <svg width="90%" height="80%">
                <rect width="300" height="100" />
            </svg>
        </div>
    )
}

export default Main;