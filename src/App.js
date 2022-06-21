
import './App.css';
import Banner from './components/Banner/Banner';
import Benefits from './components/Benefits/Benefits';
import Galary from './components/Galary/Galary';
import RoadMap from './components/RoadMap/RoadMap';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Banner />
      <Benefits />
      <Galary />
      <RoadMap />
      <Team/>
      
    </div>
  );
}

export default App;
