import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteHare, addCarrots } from '../Actions'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      payload: 0,
      message: ''
    }
  }

  deleteHare() {
    this.props.deleteHare(this.props.hare.id)
  }

  addCarrots(carrots) {
    if((this.props.hare.carrots + carrots) >= 0) {
      this.props.addCarrots(carrots, this.props.hare.id)
      this.setState({payload: this.state.payload + carrots, message: ''})
    } else {
      this.setState({message: 'Number of carrots must be positive'})
    }

  }

  render() {
    const { name, carrots } = this.props.hare

    return(
      <div className="container">
        <h1 className="Title">Hare Profile</h1>

        <div className="row">
          <div className="col-md-6 Profile">
            <div className="Profile-img">

            </div>
            <div className="Profile-info">
              <p>Name: { name }</p>
              <p>Carrots: { carrots }</p>
            </div>
          </div>
          <div className="col-md-6">
            { this.state.message.length > 0 ? <div className="alert alert-warning" role="alert"> { this.state.message } </div> : null }
          </div>
        </div>

        <div className="col-md-12 Add-carots">
          <h5 className="text-center">Add/Delete carrots</h5>

          <div className="row">
            <div className="col-md-5">
              <div className="Input-group">
                <button className="btn btn-danger btn-sm" onClick={() => this.addCarrots(-1)}>-1</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.addCarrots(-2)}>-2</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.addCarrots(-5)}>-5</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.addCarrots(-10)}>-10</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.addCarrots(-20)}>-20</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.addCarrots(-50)}>-50</button>
              </div>
            </div>

            <div className="col-md-2">
              <input className="form-control" type="text" value={this.state.payload} readOnly />
            </div>

            <div className="col-md-5">
              <div className="Input-group">
                <button className="btn btn-success btn-sm" onClick={() => this.addCarrots(1)}>+1</button>
                <button className="btn btn-success btn-sm" onClick={() => this.addCarrots(2)}>+2</button>
                <button className="btn btn-success btn-sm" onClick={() => this.addCarrots(5)}>+5</button>
                <button className="btn btn-success btn-sm" onClick={() => this.addCarrots(10)}>+10</button>
                <button className="btn btn-success btn-sm" onClick={() => this.addCarrots(20)}>+20</button>
                <button className="btn btn-success btn-sm" onClick={() => this.addCarrots(50)}>+50</button>
              </div>

            </div>

            <Link to='/' className="btn btn-primary"
              style={{marginTop: '30px', marginLeft: 'auto', marginRight: 'auto'}}
              onClick={() => this.deleteHare()}
            >Delete Hare</Link>

          </div>

        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hare: state.selectedHare
  }
}

export default connect(mapStateToProps, { deleteHare, addCarrots })(Profile);
