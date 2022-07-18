import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Bring from './Components/Bring/Bring';
import Carde from './Components/Carde/Carde';
import Sell from './Components/Sell/Sell';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Index_main from './Components/Index_main';
import Collection_main from './Components/Collection_main';
import Mint_main from './Components/Mint_main'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={<Index_main />} />
      <Route exact path="/Collection_main" element={<Collection_main />} />
      <Route exact path="/Mint_main" element={<Mint_main />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    {/* <Header />
     <Hero />
     <About />
     <Bring />
     <Carde />
     <Sell />
     <Footer /> */}
    </div>
  );
}

export default App;
