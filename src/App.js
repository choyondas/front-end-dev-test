
import './App.css';
import Banner from './components/Banner/Banner';
import Benefits from './components/Benefits/Benefits';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
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
      <Team />
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
