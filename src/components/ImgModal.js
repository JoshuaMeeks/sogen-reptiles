import React, { useState, useEffect } from 'react';
import './ImgModal.css';

export const ImgModal = ({ available, modal, toggleModal }) => {
  const {imgs} = available[0]  
  const [selected, setSelected] = useState(imgs[0])
  const [unselected, setUnselected] = useState(imgs.filter(img => img !== selected))

  useEffect(() => {
    setUnselected(imgs.filter(img => img !== selected))
  }, selected)

  if (modal) {
    return (
      <div className='modal-background' onClick={() => toggleModal()}>
        <div className='modal-container' onClick={e => e.stopPropagation()}>
          <img className='modal-selected-img' src={selected} alt="gecko" />
          <div className="unselected-img-container">
            {unselected.map(img => {
              return (
                <img onClick={() => {setSelected(img)}} className='modal-unselected-img' src={img} alt='gecko' />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
