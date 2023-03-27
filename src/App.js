import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import './App.css';
import { GiFemale } from 'react-icons/gi';
import { GiMale } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <div className="title-container">
        <h1 className="title">available</h1>
        <ul>
          <a href="#"><li>all(8)</li></a>
          <a href="#"><li>male(4)</li></a>
          <a href="#"><li>female(4)</li></a>
        </ul>
      </div>
      <div className="card-container">
        <Card 
          img={"./resources/IMG_0405.jpg"} 
          sexIcon={<GiFemale />}
          price={1200}
          dob={"04/08/21"}
          weight={28} 
        />
        <Card 
          img={"./resources/IMG_0403.jpg"} 
          sexIcon={<GiMale />} 
          price={900}
          dob={"11/04/22"}
          weight={12}
        />
        <Card 
          img={"./resources/IMG_0411.jpg"} 
          price={900}
          dob={"10/20/22"}
          weight={14}
          sexIcon={""} 
        />
        <Card 
          img={"./resources/IMG_0412.jpg"} 
          price={600}
          dob={"09/03/22"}
          weight={16}
          sexIcon={""} 
        />
        <Card 
          img={"./resources/IMG_0413.jpg"} 
          price={400}
          dob={"08/25/22"}
          weight={20}
          sexIcon={""} 
        />
        <Card 
          img={"./resources/IMG_0408.jpg"} 
          price={300}
          dob={"11/16/22"}
          weight={10}
          sexIcon={""} 
        />
        <Card 
          img={"./resources/IMG_0409.jpg"} 
          price={700}
          dob={"11/16/22"}
          weight={10}
          sexIcon={""} 
        />
        <Card 
          img={"./resources/IMG_0410.jpg"} 
          price={900}
          dob={"10/26/22"}
          weight={13}
          sexIcon={""} 
        />
      </div>
    </div>
  );
}

export default App;
