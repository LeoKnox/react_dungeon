import React, {Component} from 'react'
import './App.css'
import Menu from './Menu'
import Home from './Home'
import Second from './Second'

class App extends Component {
  setSecond  = () => {
    console.log('friend')
  }
  render() {
    return (
      <div id="app">
        <Menu  />
        <Home page="<First />" />
      </div>
    )
  }
}

export default {App, setSecond}