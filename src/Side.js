import React from "react";

class Side extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <form id="dungeonStats">
                <p>Room Name:
                    <input type="text" />
                </p>
                <p>Width:
                    <input type="text" />
                </p>
                <p>Height:
                    <input type="text" />
                </p>
                <p>Doors:
                    <input type="text" />
                </p>
                <button>Update</button>
            </form>
        )
    }
}

export default Side;