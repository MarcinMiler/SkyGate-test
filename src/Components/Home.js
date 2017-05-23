import React, { Component } from 'react'

//importing icons
import FaUser from 'react-icons/lib/fa/user'

import '../Styles/App.css'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="Title">Krolestwo Zajecy</h1>

        <button className="btn btn-primary Btn-add">Add Zajec</button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Amount of carrots</th>
              <th>Go to Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>1</td>
              <td><FaUser className="Icon-user" /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>2</td>
              <td><FaUser className="Icon-user" /></td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default Home
