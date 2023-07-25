import React,{useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import Contact from './components/Contact/Contact';
import AllCities from './pages/AllCities/AllCities';
import CityDetails from './pages/CityDetails/CityDetails';


function App() {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/allcities' element={<AllCities/>}/>
        <Route path='/citydetails/:cityId' element={<CityDetails/>}/>
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
