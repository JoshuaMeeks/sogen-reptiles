import React from 'react'

export const Availability = ({ maleAvailability, data, setAvailability, femaleAvailability, unsexedAvailability }) => {

  return (
    <div className="availability-container">
      <div className="title-container">
        <h1 className="title">available</h1>
          <ul>
            <li onClick={() => setAvailability(data)}>all({data.length})</li>
            <li onClick={() => maleAvailability()}>male({data.filter(item => item.sex === 'male').length})</li>
            <li onClick={() => femaleAvailability()}>female({data.filter(item => item.sex === 'female').length})</li>
            <li onClick={() => unsexedAvailability()}>unsexed({data.filter(item => item.sex === 'unsexed').length})</li>
          </ul>
      </div>
    </div>
  )
}
