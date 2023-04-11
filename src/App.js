import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Error } from "./components/Error";
import { Description } from "./components/Description";
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import data from './data.json';
import { AppContext, useGlobalContext } from "./context";

function App() {
  const available = useGlobalContext();
  const [availability, setAvailability] = useState(data);
  const [maleAvailability, setMaleAvailability] = useState(availability.filter(available => available.sex === 'male'));
  const [femaleAvailability, setFemaleAvailability] = useState(availability.filter(available => available.sex === 'female'))
  const [unsexedAvailability, setUnsexedAvailability] = useState(availability.filter(available => available.sex === 'unsexed'))

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Hero />
          } 
        />
        <Route 
          path="/available" 
          element={
          <>
            <div className="title-container">
              <h1 className="title">available</h1>
              <ul>
                <li onClick={() => setAvailability(data)}><a href='#'>all({data.length})</a></li>
                <li onClick={() => setAvailability(maleAvailability)}><a href='#'>male({maleAvailability.length})</a></li>
                <li onClick={() => setAvailability(femaleAvailability)}><a href='#'>female({femaleAvailability.length})</a></li>
                <li onClick={() => setAvailability(unsexedAvailability)}><a href='#'>unsexed({unsexedAvailability.length})</a></li>
              </ul>
            </div>
            <div className="card-container">
              {availability.map(available => {
                const { img, id } = available;
                return (
                  <Card 
                    key={id}
                    img={img}
                    id={id}
                  />
                )
              })}
            </div>
          </>
        } />
        <Route 
          path="/available/:id" 
          element={
            <Description available={available} />
          } 
        />
        <Route 
          path="/undefined" 
          element={
            <Error />
          }
        />
        <Route 
          path="*" 
          element={
            <Error />
          }
        />
      </Routes>
    </>
  );
}

export default App;
