import React from 'react';
import { ImageCarousel } from './ImageCarousel';
import './ImgModal.css';

export const ImgModal = ({ modal, available, toggleModal }) => {
  if (modal) {
    return (
      <div className="modal-container" onClick={() => toggleModal()}>
        <ImageCarousel 
          available={available}
        />
      </div>
    )
  }
}
