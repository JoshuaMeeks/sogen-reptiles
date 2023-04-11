import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Error } from "./components/Error";
import { Description } from "./components/Description";
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Availablity from './data.json';
import { AppContext, useGlobalContext } from "./context";

function App() {
  const available = useGlobalContext();

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
                <a href="#"><li>all(8)</li></a>
                <a href="#"><li>male(4)</li></a>
                <a href="#"><li>female(4)</li></a>
                <a href="#"><li>unsexed(0)</li></a>
              </ul>
            </div>
            <div className="card-container">
              {Availablity.map(available => {
                const { img, id } = available;
                return (
                  <Card 
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
