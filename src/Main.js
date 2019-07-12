import React from "react";

function Main(myName) {
    return (
        <div className="Main">
            <h1>{myName.myName.name}</h1>
            <svg width="90%" height="80%">
                <rect width="300" height="100" />
            </svg>
        </div>
    )
}

export default Main;