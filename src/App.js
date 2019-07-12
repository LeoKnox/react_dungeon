import React, {Component} from 'react';
import './App.css';
import Head from './Head';
import Side from './Side';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {name: ""}
  }

  /*onValueChange(newValues) {
    this.setState({
      name: newValues
    })
  }*/
  onValueChange = (newValues) => {
    this.setState({name:newValues});
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
