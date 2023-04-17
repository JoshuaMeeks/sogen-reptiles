import React from 'react'

export const Availability = ({ data, setAvailability, maleAvailability, femaleAvailability, unsexedAvailability }) => {
  return (
    <div className="availability-container">
      <div className="title-container">
        <h1 className="title">available</h1>
          <ul>
            <li onClick={() => setAvailability(data)}>all({data.length})</li>

            <li onClick={() => setAvailability(maleAvailability)}><>male({maleAvailability.length})</></li>

            {/* <li onClick={() => setAvailability(maleAvailability)}><a href='#'>male({maleAvailability.length})</a></li> */}
            <li onClick={() => setAvailability(femaleAvailability)}><>female({femaleAvailability.length})</></li>
            <li onClick={() => setAvailability(unsexedAvailability)}><>unsexed({unsexedAvailability.length})</></li>
          </ul>
      </div>
    </div>
  )
}
