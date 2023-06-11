import "./App.css";
import Navbar from "./components/NavBar";
import HeroFold from "./components/HeroFold";
import BUIDLCrewCTA from "./components/BuildCTA";
import HowToJoin from "./components/HowToJoin";
import ContestE from "./components/ContestE";
import Carsol from "./components/Carsol";
import Showcase from "./components/Showcase";
function App() {
  return <div>
     <Navbar />
    <HeroFold/>
    <BUIDLCrewCTA/>
    <HowToJoin/>
    <ContestE/>
    <Carsol />
    <Showcase/>
  </div>;
}

export default App;
