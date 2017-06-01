import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  { selectHare, sort } from '../Actions'
//importing icons
import FaUser from 'react-icons/lib/fa/user'

class Table extends Component {

  selectHare(name, carrots, id) {
    this.props.selectHare(name, carrots, id)
  }

  sort() {
    this.props.sort()
    this.forceUpdate()
  }

  render() {
    console.log(this.props)

    const listOfUsers = this.props.users.map((user, i) => {
      return(
        <tr key={i}>
          <th scope="row">{ i + 1 }</th>
          <td>{ user.name }</td>
          <td>{ user.carrots }</td>
          <td><Link to='/profile'><FaUser className="Icon-user" onClick={() => this.selectHare(user.name, user.carrots, user.id)} /></Link></td>
        </tr>
      )
    })

    return(
      <div>
        <button className="btn btn-primary" onClick={() => this.sort()}>Sort</button>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.hares,
  }
}

export default connect(mapStateToProps, { selectHare, sort })(Table);
