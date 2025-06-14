import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import Locations from './components/Locations/Locations';
import Gastronomy from './components/Gastronomy/Gastronomy';
import Traditions from './components/Traditions/Traditions';
import CityCenter from './components/Locations/zakliczyn/cityCenter';
import Melsztyn from './components/Locations/melsztyn/melsztyn';
import MusicCenter from './components/Locations/musicCenter/MusicCenter';
import EuroveloMotesk from './components/Locations/euroveloMotesk/EuroveloMotesk';
import StIdzi from './components/Locations/StIdzi/StIdzi';
import CakeWithBeans from './components/Gastronomy/CakeWithBeans/CakeWithBeans';
import BeanPastries from './components/Gastronomy/BeanPastries/BeansPastries';
import Borscht from './components/Gastronomy/Borscht/Borscht';
import BakedBeans from './components/Gastronomy/BakedBeans/BakedBeans';
import SourRyeSoup from './components/Gastronomy/SourRyeSoup/SourRyeSoup';
import Pierogi from './components/Gastronomy/Pierogi/Pierogi';
import FolkCostumes from './components/Traditions/Folk Costumes/FolkCostumes';
import FatThursday from './components/Traditions/FatThursday/FatThursday';
import WetMonday from './components/Traditions/WetMonday/WetMonday';
import SecondWedding from './components/Traditions/SecondWedding/SecondWedding';
import RetirementHomes from './components/Traditions/Retirement Homes/RetirementHomes';
import AboutUs from './components/AboutUs/AboutUs';

import './App.css'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router basename="/bip">
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/Gastronomy" element={<Gastronomy />} />
            <Route path="/Traditions" element={<Traditions />} />
            <Route path="/RetirementHomes" element={<RetirementHomes />} />
            <Route path="Locations/cityCenter" element={<CityCenter />} />
            <Route path="Locations/melsztyn" element={<Melsztyn />} />
            <Route path="Locations/MusicCenter" element={<MusicCenter />} />
            <Route path="Locations/EuroveloMotesk" element={<EuroveloMotesk />} />
            <Route path="Locations/StIdzi" element={<StIdzi />} />
            <Route path="Gastronomy/CakeWithBeans" element={<CakeWithBeans />} />
            <Route path="Gastronomy/BeanPastries" element={<BeanPastries />} />
            <Route path="Gastronomy/Borscht" element={<Borscht />} />
            <Route path="Gastronomy/BakedBeans" element={<BakedBeans />} />
            <Route path="Gastronomy/SourRyeSoup" element={<SourRyeSoup />} />
            <Route path="Gastronomy/Pierogi" element={<Pierogi />} />
            <Route path="Traditions/FolkCostumes" element={<FolkCostumes />} />
            <Route path="Traditions/FatThursday" element={<FatThursday />} />
            <Route path="Traditions/WetMonday" element={<WetMonday />} />
            <Route path="Traditions/SecondWedding" element={<SecondWedding />} />
            <Route path="ElderlyHomes/RetirementHomes" element={<RetirementHomes />} />
            <Route path="AboutUs/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;