import React, {Component} from 'react';
import './App.css';
import Head from './Head';
import Side from './Side';
import Main from './Main';

class App extends Component {
  constructor() {
    super()
    this.state = { name: "dungeon"}
  }

  onValueChange(newValues) {
    this.setState({
      name: newValues
    })
  }

render() {
  return (
    <div className="App">
      <Head />
      <Side changeValue={this.onValueChange.bind(this)}/>
      <Main myName = { this.state } />
    </div>
    )
  }
}

export default App;
