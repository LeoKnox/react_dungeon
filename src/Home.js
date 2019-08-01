import React, {Component} from 'react'
import First from './First'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: <First />
    }
  }

  render() {
      return (
          <div id="home">
              {this.props.page}
          </div>
      )
  }
}

export default Home