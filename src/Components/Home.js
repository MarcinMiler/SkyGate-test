import React, { Component } from 'react'

//importing components
import AddProfile from './AddProfile'
import Table from './Table'

import '../Styles/App.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="Title">Kingdom of Hares</h1>

        <button className="btn btn-primary Btn-add" onClick={() => this.setState({toggle: !this.state.toggle})}>Add Hare</button>

        {/* Toggle AddProfile component */}
        { this.state.toggle ? <AddProfile /> : null }

        <Table />

      </div>
    )
  }
}

export default Home
