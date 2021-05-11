import React from "react";
import Header from "./Header";
import Home from './Home';
// import Footer from "./Footer";

function MainContent() {

  let currentlyVisibleState = <Home/>;
  
  return (
    <div className="bgImage">
      <Header/>
      {currentlyVisibleState}
    </div>
  );
}



export default MainContent;