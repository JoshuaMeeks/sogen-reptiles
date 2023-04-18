import React, { useState } from 'react';
import './ImageCarousel.css';

export const ImageCarousel = ({ available }) => {
  const {imgs} = available[0]  
  const [selected, setSelected] = useState(false)

  //future notes: clicking selected image will enlarge it

  //make first image the selected image by default
  //
  
  //allow for only one selected image at a time
  
  
  //map through remaining images and display them as selectable thumbnails 
  
  
  //clicking a thumbnail results in image being displayed as selected

  return (
    <div className='carousel-container'>
      <img className='selected-img' src={imgs[0]} alt="gecko" />
      <div className="unselected-img-container">
        <img className='unselected-img' src={imgs} alt="gecko" />
        <img className='unselected-img' src={imgs} alt="gecko" />
        <img className='unselected-img' src={imgs} alt="gecko" />
        <img className='unselected-img' src={imgs} alt="gecko" />
      </div>
    </div>
  )
}
