import React, {Component} from 'react';
import './App.css';
import Head from './Head';
import Side from './Side';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newValues: {
        roomName: "",
        width: "",
        height: ""
      }
    }
  }

  onValueChange = (newValues) => {
    this.setState({newValues});
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
