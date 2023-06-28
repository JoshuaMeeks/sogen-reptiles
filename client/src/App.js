import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { TermsConditions } from "./components/TermsConditions";
import { Shipping } from "./components/Shipping";
import { Available } from "./components/Available";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart";
import { Error } from "./components/Error";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { Success } from "./components/Success";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/available")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  const [availability, setAvailability] = useState(null);

  const maleAvailability = () => {
    setAvailability(data.filter(available => available.sex === 'male'))
  };
  const femaleAvailability = () => {
    setAvailability(data.filter(available => available.sex === 'female'))
  };
  const unsexedAvailability = () => {
    setAvailability(data.filter(available => available.sex === 'unsexed'))
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [cart, setCart] = useState([]);

  return (
    <div className="page-container">
      <Navbar 
        data={data}
        cart={cart}
        setAvailablility={setAvailability}
      />
      <div className="content">
        <Routes>
          <Route 
            path="/" 
            element={
              <Hero />
            } 
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact />
            }
          />
          <Route
            path="/termsconditions"
            element={
              <TermsConditions />
            }
          />
          <Route
            path="/shipping"
            element={
              <Shipping />
            }
          />
          <Route 
            path="/available" 
            element={
              <>
                <Available 
                  data={data}
                  setAvailability={setAvailability} 
                  maleAvailability={maleAvailability}
                  femaleAvailability={femaleAvailability}
                  unsexedAvailability={unsexedAvailability}
                />
                <div className="card-container">
                  {availability && availability.map(available => {
                    return (
                      <Card 
                        key={available.id}
                        imgs={available.imgs}
                        id={available.id}
                      />
                    )
                  })}
                </div>
              </>
            }
          />
          <Route 
            path="/available/:id" 
            element={
              <div className="product-container">
                <Available 
                data={data}
                setAvailability={setAvailability} 
                maleAvailability={maleAvailability}
                femaleAvailability={femaleAvailability}
                unsexedAvailability={unsexedAvailability}
                />
                <Description
                  modal={modal}
                  setModal={setModal}
                  toggleModal={toggleModal}
                  cart={cart}
                  setCart={setCart}
                  data={data}
                />
              </div>
            } 
          />
          <Route 
            path="/undefined" 
            element={
              <Error />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart 
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route 
            path="/success"
            element={
              <Success />
            } 
          />
          <Route 
            path="*" 
            element={
              <Error />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
