import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <div className="title-container">
        <h1 className="title">available</h1>
        <ul>
          <li>all(12)</li>
          <li>male(4)</li>
          <li>female(8)</li>
        </ul>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
