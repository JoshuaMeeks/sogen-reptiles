import React, { useState } from 'react';
import { ImageCarousel } from './ImageCarousel';
import './ImgModal.css';

export const ImgModal = ({ modal, setModal, available }) => {
  if (modal) {
    return (
      <div className="modal-container">
        <ImageCarousel 
          available={available}
        />
      </div>
    )
  }
}
