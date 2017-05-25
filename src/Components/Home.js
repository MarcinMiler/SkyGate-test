import React, { Component } from 'react'

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
        <h1 className="Title">Krolestwo Zajecy</h1>

        <button className="btn btn-primary Btn-add" onClick={() => this.setState({toggle: !this.state.toggle})}>Add Zajec</button>

        { this.state.toggle ? <AddProfile /> : null }

        <Table />

      </div>
    )
  }
}

export default Home
