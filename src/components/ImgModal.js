import React from 'react';
import './ImgModal.css';

export const ImgModal = ({ modal, selected, setSelected, unselected, toggleModal }) => {

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
