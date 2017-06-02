import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { addHareAndSort } from '../Actions'
import '../Styles/App.css'

class AddProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      carrots: '',
      message: ''
    }
  }

  addHare() {
    if(this.state.message !== 'Number must be positive') {
      const { name, carrots } = this.state
      const parsedCarrots = parseInt(carrots, 10)
      this.props.addHareAndSort(name, parsedCarrots)
      this.setState({message: ''})
    } else {
      this.setState({message: 'You cant add Hare with negative number of carrots'})
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-6">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Name" onChange={event => this.setState({name: event.target.value})} />
          </div>
          <div className="input-group Add-profile">
            <input className="form-control" type="text" style={{marginTop: '10px'}} placeholder="Amount of carrots"
              onChange={event => event.target.value >= 0 ? this.setState({carrots: event.target.value}) : this.setState({message: 'Number must be positive'})} />
          </div>

          <button className="btn btn-success" style={{marginTop: '10px', marginBottom: '10px'}} onClick={() => this.addHare()} >Add</button>
        </div>
        <div className="col-lg-6">
          { this.state.message.length > 0 ? <div className="alert alert-warning" role="alert"> { this.state.message } </div> : null}
        </div>
      </div>
    )
  }
}

export default connect(null, { addHareAndSort })(AddProfile);
