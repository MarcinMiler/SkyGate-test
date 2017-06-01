import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { addHare } from '../Actions'
import '../Styles/App.css'

class AddProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      carrots: ''
    }
  }

  addHare() {
    const { name, carrots } = this.state
    const parsedCarrots = parseInt(carrots, 10)
    this.props.addHare(name, parsedCarrots)
  }

  hardTest() {
    for(let i = 0; i < 20000; i++) {
      let c = Math.floor(Math.random() * 10000)
      this.props.addHare('lul', c)
    }
    this.forceUpdate()
  }

  render() {
    return(
      <div>
        <div className="input-group Add-profile">
          <input className="form-control" type="text" placeholder="Name" onChange={event => this.setState({name: event.target.value})} />
        </div>
        <div className="input-group Add-profile">
          <input className="form-control" type="text" style={{marginTop: '10px'}} placeholder="Amount of carrots" onChange={event => this.setState({carrots: event.target.value})} />
        </div>

        <button className="btn btn-success" style={{marginTop: '10px', marginBottom: '10px'}} onClick={() => this.addHare()} >Add</button>
        <button className="btn btn-success" style={{marginTop: '10px', marginBottom: '10px'}} onClick={() => this.hardTest()} >Hard test</button>

      </div>
    )
  }
}

export default connect(null, { addHare })(AddProfile);
