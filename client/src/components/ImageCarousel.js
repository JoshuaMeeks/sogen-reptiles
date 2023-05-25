import React from 'react';
import './ImageCarousel.css';

export const ImageCarousel = ({ selected, setSelected, unselected, modal, setModal }) => {  

  return (
    <div className='carousel-container'>
      <img className='selected-img' src={selected} alt="gecko" onClick={() => setModal(!modal)} />
      <div className="unselected-img-container">
        {unselected.map(img => {
          return (
            <img onClick={() => {setSelected(img)}} className='unselected-img' src={img} alt='gecko' />
          )
        })}
      </div>
    </div>    
  )
}
