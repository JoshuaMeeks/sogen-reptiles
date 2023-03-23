import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <h1 className="title">available</h1>
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
