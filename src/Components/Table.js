import React, { Component } from 'react'
import { connect } from 'react-redux'
//importing icons
import FaUser from 'react-icons/lib/fa/user'

class Table extends Component {
  render() {
    console.log(this.props)

    const listOfUsers = this.props.users.map((user, i) => {
      return(
        <tr key={i}>
          <th scope="row">1</th>
          <td>{ user.name }</td>
          <td>{ user.carrots }</td>
          <td><FaUser className="Icon-user" /></td>
        </tr>
      )
    })

    return(
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
          { listOfUsers }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state
  }
}

export default connect(mapStateToProps, null)(Table);
