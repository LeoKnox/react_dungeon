import React from "react";

function Main(props) {
    return (
        <div className="Main">
            <p className="roomName">Room name: {
                props.myName.newValues.roomName
            }</p>
            <svg width="90%" height="80%">
                <rect
                    width={props.myName.newValues.width*50}
                    height={props.myName.newValues.height*50}
                />
            </svg>
        </div>
    )
}

export default Main;