import React from 'react'
import '../Styles/App.css'

const AddProfile = () => {
  return(
    <div>
      <div className="input-group Add-profile">
        <input className="form-control" type="text" placeholder="Name" />
      </div>
      <div className="input-group Add-profile">
        <input className="form-control" type="text" style={{marginTop: '10px'}} placeholder="Amount of carrots" />
      </div>

      <button className="btn btn-success" style={{marginTop: '10px', marginBottom: '10px'}}>Add</button>

    </div>
  )
}

export default AddProfile
