import React from 'react'
import Aboutus from '../../Img/Aboutus.jpg'
import {Route, Routes, Link } from "react-router-dom";
import AboutDescription from '../about/AboutDescription';
import AboutOtherSide from '../about/AboutOtherSide'
import AboutOurWork from '../about/AboutOurWork'
import AboutTheComapny from '../about/AboutTheComapny'
import AboutYear from '../about/AboutYear'
import './About.css'

const About = () => {
  return (
    <>
      <AboutDescription aSrc={Aboutus}/> 
      <div className="mainAbout py-5 border">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About Company</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Our Work</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Other Side</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab1" data-bs-toggle="tab" data-bs-target="#contact1" type="button" role="tab" aria-controls="contact" aria-selected="false">Year</button>
            </li>
          </ul>
          <div className="tab-content p-3 border" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <AboutTheComapny/>
            </div>

            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <AboutOurWork/>
            </div>

            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <AboutOtherSide/>
            </div>

            <div className="tab-pane fade" id="contact1" role="tabpanel" aria-labelledby="contact-tab">
              <AboutYear/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About