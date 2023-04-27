import React from 'react';
import './ImgModal.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const ImgModal = ({ modal, selected, setSelected, unselected, toggleModal }) => {

  if (modal) {
    document.querySelector('body').style.overflow = "hidden";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    return (
      <div className='modal-background' onClick={() => toggleModal()}>
        <div className='modal-container' onClick={e => e.stopPropagation()}>
          <button className='close-btn' onClick={toggleModal}>&times;</button>
          <div>
            <BsChevronLeft className='chevron' />
            <img className='modal-selected-img' src={selected} alt="gecko" />
            <BsChevronRight className='chevron' />
          </div>
          {/* <div className="unselected-img-container">
            {unselected.map(img => {
              return (
                <img onClick={() => {setSelected(img)}} className='modal-unselected-img' src={img} alt='gecko' />
              )
            })}
          </div> */}
        </div>
      </div>
    )
  }
  if (!modal) {
    document.querySelector('body').style.overflow = "";
  }
}
