import React from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

export const TermsConditions = () => {
  return (
    <div className="title-container">
      <h1 className="title">terms and conditions</h1>
      <p className='terms'>
        <p>
          <b>We reserve the right to refuse service. Our animals' health and wellbeing are first priority.</b>
        </p><br/><br/>
        <ul>
          <li>
            Shipping is done via FedEx using priority overnight shipping. We ship Monday through Wednesday.
          </li><br/>
          <li>
            We <i>ONLY</i> ship to an authorized FedEx shipping hub. We don't ship to personal addresses. 
            This is done to mitigate as many stressors as possible.
          </li><br/>
          <li>
            Shipments must be scheduled at least 2 days in advance.
          </li><br/>
          <li>
            Shipping schedules are subject to change under rare circumstances such as unforeseen inclimate weather.
          </li><br/>
          <li>
            We will hold your animal at no cost until adequate shipping conditions are met.
          </li><br/>
          <li>
            Shipping temperatures must be between 60 degrees fahrenheit at the lowest and 90 degrees fahrenheit at the highest.
          </li><br/>
        </ul><br/><br/>
        <p>To schedule a shipment please email us at <a href='#'>shipping@sogenreptiles.com</a> or <Link to='/contact'>click here</Link>.</p>
      </p>
    </div>
  )
}
