import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import {Switch, Route, Routes } from "react-router-dom";
import About from "./Components/SmallComponents/About";
import FlatBedTrailers from "./Components/Products/FlatBedTrailers";
import RockBody from "./Components/Products/RockBody";
import SidewallTrailers from "./Components/Products/SidewallTrailers";
import TipTrailers from "./Components/Products/TipTrailers";
import Tipper from "./Components/Products/Tipper";
import Contactus from "./Components/Contactus";



const App = () =>{
  return <>
     <Header/>      
     <Nav/>   
     <Home/>
     <Routes>
        <Route index exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />    
        <Route exact path="/FlatBedTrailers" element={<FlatBedTrailers/>} />  
        <Route exact path="/SidewallTrailers" element={<SidewallTrailers/>} />   
        <Route exact path="/RockBody" element={<RockBody/>} />     
        <Route exact path="/TipTrailers" element={<TipTrailers/>} />
        <Route exact path="/Tipper" element={<Tipper/>} />     
        <Route exact path="/Contactus" element={<Contactus/>} />     



     </Routes>        
     <Footer/>
  </>  
}

export default App;