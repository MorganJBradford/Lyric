import React from "react";
import Header from "./Header";
import Home from './Home';
import Footer from "./Footer";
import '../App.css';

function MainContent() {
  return (
      <div className="bgImage">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    )
  }


export default MainContent;