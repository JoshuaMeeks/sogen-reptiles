import { useState } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Error } from "./components/Error";
import { Description } from "./components/Description";
import './App.css';
import { Route, Routes } from "react-router-dom";
import data from './data.json';
import { Footer } from "./components/Footer";
import { Availability } from "./components/Availability";

function App() {
  const [availability, setAvailability] = useState(data);

  const maleAvailability = () => {
    setAvailability(data.filter(available => available.sex === 'male'))
  }

  const femaleAvailability = () => {
    setAvailability(data.filter(available => available.sex === 'female'))
  }

  const unsexedAvailability = () => {
    setAvailability(data.filter(available => available.sex === 'unsexed'))
  }

  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Hero 
              setAvailability={setAvailability}
              data={data}
            />
          } 
        />
        <Route 
          path="/available" 
          element={
          <>
            <Availability 
              data={data}
              availability={availability}
              setAvailability={setAvailability} 
              maleAvailability={maleAvailability}
              femaleAvailability={femaleAvailability}
              unsexedAvailability={unsexedAvailability}
            />
            <div className="card-container">
              {availability.map(available => {
                return (
                  <Card 
                    key={available.id}
                    img={available.img}
                    id={available.id}
                  />
                )
              })}
            </div>
          </>
        } />
        <Route 
          path="/available/:id" 
          element={
            <div className="main-container">
              <Availability 
              data={data}
              setAvailability={setAvailability} 
              // maleAvailability={maleAvailability}
              femaleAvailability={femaleAvailability}
              unsexedAvailability={unsexedAvailability}
              />
              <Description
                availability={availability}
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
          path="*" 
          element={
            <Error />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
