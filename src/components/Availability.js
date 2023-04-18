import React from 'react'
import { Link } from 'react-router-dom'

export const Availability = ({ maleAvailability, data, setAvailability, femaleAvailability, unsexedAvailability }) => {

  return (
    <div className="availability-container">
      <div className="title-container">
        <h1 className="title">available</h1>
          <ul>
            <li onClick={() => setAvailability(data)}><Link to="/available">all({data.length})</Link></li>
            <li onClick={() => maleAvailability()}><Link to="/available">male({data.filter(item => item.sex === 'male').length})</Link></li>
            <li onClick={() => femaleAvailability()}><Link to="/available">female({data.filter(item => item.sex === 'female').length})</Link></li>
            <li onClick={() => unsexedAvailability()}><Link to="/available">unsexed({data.filter(item => item.sex === 'unsexed').length})</Link></li>
          </ul>
      </div>
    </div>
  )
}
