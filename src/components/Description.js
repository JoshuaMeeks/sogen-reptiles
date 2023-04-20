import React, { useState, useEffect } from 'react'
import "./Description.css";
import { useParams } from 'react-router-dom'; 
import { ImageCarousel } from './ImageCarousel';
import { ImgModal } from './ImgModal';

export const Description = ({ availability, modal, setModal, toggleModal }) => {
  const { id } = useParams();

  const available = availability.filter(available => available.id === id);
  const {imgs} = available[0];
  const [selected, setSelected] = useState(imgs[0]);
  const [unselected, setUnselected] = useState(imgs.filter(img => img !== selected));

  useEffect(() => {
    setUnselected(imgs.filter(img => img !== selected))
  }, selected)

  return (
    <div className="description-container">
      <ImageCarousel 
        imgs={imgs}
        selected={selected}
        setSelected={setSelected}
        unselected={unselected}
        modal={modal}
        setModal={setModal}
      />
      <ImgModal 
        modal={modal}
        setModal={setModal}
        selected={selected}
        setSelected={setSelected}
        unselected={unselected}
        toggleModal={toggleModal}
      />
      <div className='description'>
        <h1>{available[0].morph}</h1>
        <p>Sex: {available[0].sex}</p>
        <p>D.O.B: {available[0].dob}</p>
        <p>Weight: {available[0].weight}</p>
        <p>Price: <span className='price-styling'>{available[0].price}</span></p>
        <p>{available[0].descriptor}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
