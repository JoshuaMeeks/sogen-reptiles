import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
