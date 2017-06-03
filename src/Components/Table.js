import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//importing actions
import  { selectHare, sort } from '../Actions'
//importing icons
import FaUser from 'react-icons/lib/fa/user'

class Table extends Component {

  //selectedHare to display on Profile component
  selectHare(name, carrots, id) {
    this.props.selectHare(name, carrots, id)
  }
  //sorting table when component will apear
  componentWillMount() {
    this.props.sort()
  }

  render() {
    //create a table of hares
    const listOfHares = this.props.hares.map((hare, i) => {
      return(
        <tr key={i}>
          <th scope="row">{ i + 1 }</th>
          <td>{ hare.name }</td>
          <td>{ hare.carrots }</td>
          <td><Link to='/profile'><FaUser className="Icon-user" onClick={() => this.selectHare(hare.name, hare.carrots, hare.id)} /></Link></td>
        </tr>
      )
    })

    return(
      <div>
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
            {/* rendering table of hares */}
            { listOfHares }
          </tbody>
        </table>
      </div>
    )
  }
}

//giving data to component
const mapStateToProps = (state) => {
  return {
    hares: state.hares,
  }
}

export default connect(mapStateToProps, { selectHare, sort })(Table);
