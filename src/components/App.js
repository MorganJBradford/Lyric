import React from "react";
import MainContent from './MainContent';
import './../Animation.scss';
import './../App.css';
import { AppProvider } from './../AppContext.js';

function App() {
return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
