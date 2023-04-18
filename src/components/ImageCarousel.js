import React, { useState } from 'react';
import './ImageCarousel.css';

export const ImageCarousel = ({ available }) => {
  const {imgs} = available[0]  
  const [selected, setSelected] = useState(imgs[0])
  const [unselected, setUnselected] = useState(imgs.filter(img => img !== selected))

  //future notes: clicking selected image will enlarge it

  //make first image the selected image by default
  //
  
  //allow for only one selected image at a time
  
  
  //map through remaining images and display them as selectable thumbnails 
  
  
  //clicking a thumbnail results in image being displayed as selected

  return (
    <div className='carousel-container'>
      {console.log(unselected)}
      <img className='selected-img' src={selected} alt="gecko" />
      <div className="unselected-img-container">
        {unselected.map(img => {
          return (
            <img className='unselected-img' src={img} alt='gecko' />
          )
        })}
        {/* <img className='unselected-img' src={imgs} alt="gecko" />
        <img className='unselected-img' src={imgs} alt="gecko" />
        <img className='unselected-img' src={imgs} alt="gecko" />
        <img className='unselected-img' src={imgs} alt="gecko" /> */}
      </div>
    </div>
  )
}
