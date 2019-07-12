import React from "react";

function Main(props) {
    return (
        <div className="Main">
            <p className="roomName">Room name: {props.myName.name}</p>
            <svg width="90%" height="80%">
                <rect width="300" height="100" />
            </svg>
        </div>
    )
}

export default Main;