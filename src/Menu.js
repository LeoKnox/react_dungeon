import React, {Component} from "react"
import './Menu.css'
import setSecond from './App'

class Menu extends Component {
    render() {
        return (
            <div id="menu">
                <label onClick="">Home</label>
                <label onClick={setSecond}>Second</label>
            </div>
        )
    }
}

export default Menu