import React, { useState, useEffect } from 'react';
import './ImgModal.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export const ImgModal = ({ modal, selected, unselected, toggleModal }) => {
  const [modalSelected, setModalSelected] = useState(selected);
  const completeImageList = [selected, ...unselected];
  let currentIndex = completeImageList.indexOf(modalSelected)

  useEffect(() => {
    setModalSelected(selected);
  }, selected)

  const nextImage = () => {
    if (currentIndex + 1 >= completeImageList.length) {
      setModalSelected(completeImageList[0]);
    } else {
      setModalSelected(completeImageList[currentIndex + 1]);
    }
  }

  const previousImage = () => {
    if (currentIndex - 1 < 0) {
      setModalSelected(completeImageList[completeImageList.length - 1]);
    } else {
      setModalSelected(completeImageList[currentIndex - 1]);
    }
  }

  if (modal) {
    document.querySelector('body').style.overflow = "hidden";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; 

    return (
      <div className='modal-background' onClick={() => toggleModal()}>
        <div className='modal-container' onClick={e => e.stopPropagation()}>
          <div className='close-btn-container'>
            <button className='close-btn' onClick={() => toggleModal()}>&times;</button>
          </div>
          <div>
            <BsChevronLeft className='chevron' onClick={() => previousImage()} />
            <img className='modal-selected-img' src={modalSelected} alt="gecko" />
            <BsChevronRight className='chevron' onClick={() => nextImage()} />
          </div>
        </div>
      </div>
    )
  }
  if (!modal) {
    document.querySelector('body').style.overflow = "";
  }
}
