import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Homepage/MyNavbar';
import Section from './Homepage/Section';
import Second from './Homepage/Second';
import Thirdpage from './Homepage/Thirdpage';
import Fourthpage from './Homepage/Fourthpage';
import Fifthpage from './Homepage/Fifthpage';
import Sixthpage from './Homepage/Sixthpage';
import Seventh from './Homepage/Seventh';
import Eighthpage from './Homepage/Eighthpage';
import Ninethpage from './Homepage/Ninethpage';
import Footer from './Homepage/Footer';

function App() {
  return (
    <>
      <MyNavbar />

      {/* Har section ko ek unique ID diya hai */}
      <div id="home"><Section /></div>
      <div id="about"><Second /></div>
      <div id="tours"><Thirdpage /></div>
      <div id="fifth"><Fifthpage /></div>
    <div id="destinations"><Sixthpage /></div>
      <div id="seventh"><Seventh /></div>
      <div id="contact"><Eighthpage /></div>
      <div id="nineth"><Ninethpage /></div>

      <Footer />
    </>
  );
}

export default App;
