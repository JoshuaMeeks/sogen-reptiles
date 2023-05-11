import React, { useState, useEffect } from 'react'
import "./Description.css";
import { useParams } from 'react-router-dom'; 
import { ImageCarousel } from './ImageCarousel';
import { ImgModal } from './ImgModal';

export const Description = ({ availability, modal, setModal, toggleModal, cart, setCart }) => {
  const { id } = useParams();

  const available = availability.filter(available => available.id === id);
  const {imgs} = available[0];
  const [selected, setSelected] = useState(imgs[0]);
  const [unselected, setUnselected] = useState(imgs.filter(img => img !== selected));
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    setUnselected(imgs.filter(img => img !== selected))
  }, selected)

  const addedToCartMessage = () => {
    setAddedToCart(true)
    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  };

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
        <p>Price: <span className='price-styling'>${available[0].price}.00</span></p>
        <p className='descriptor'>{available[0].descriptor}</p>
        <button className={(addedToCart) ? 'added-to-cart-btn' : 'add-to-cart-btn' } onClick={() => {
          addedToCartMessage();
          setCart([...cart, available[0]]);
        }}>{(addedToCart) ? 'Added to cart' : 'Add to cart'}</button>
      </div>
    </div>
  )
}
