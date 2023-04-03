import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Error } from "./components/Error";
import './App.css';
import { GiFemale } from 'react-icons/gi';
import { GiMale } from 'react-icons/gi';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const data = 
    [
      "./resources/IMG_0403.jpg", "./resources/IMG_0413.jpg", 
      "./resources/IMG_0405.jpg", "./resources/IMG_0408.jpg",
      "./resources/IMG_0409.jpg", "./resources/IMG_0410.jpg",
      "./resources/IMG_0411.jpg", "./resources/IMG_0412.jpg"
    ]
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
              {data.map((img) => {
                return <Card img={img} />
              })}
            </div>
          </>
        } />
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
