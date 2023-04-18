import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import data from './data.json';
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { TermsConditions } from "./components/TermsConditions";
import { Shipping } from "./components/Shipping";
import { Card } from "./components/Card";
import { Error } from "./components/Error";
import { Description } from "./components/Description";
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
    <div className="page-container">
      <Navbar />
      <div className="content">
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
              <Availability 
                data={data}
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
                      imgs={available.imgs}
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
                maleAvailability={maleAvailability}
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
