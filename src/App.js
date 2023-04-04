import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Error } from "./components/Error";
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import data from './data.json';

function App() {
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
              {data.map((data) => {
                const {img, id} = data;
                console.log(img);
                return (
                  <Card img={img} id={id} />
                )
              })}
            </div>
          </>
        } />
        <Route 
          path="/available/:id" 
          element={<h1>test</h1>} 
        />
        <Route 
          path="/undefined" 
          element={
            <Error />
          }
        />
      </Routes>
    </>
  );
}

export default App;
