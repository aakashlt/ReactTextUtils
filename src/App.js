import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
     if(mode==="light"){
       setMode("dark");
       document.body.style.backgroundColor= "grey"
     }
     else{
       setMode("light");
       document.body.style.backgroundColor= "white"
     }
  }
  
  return (
    <>
        
      
        <NavBar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <TextForm heading="Enter Text here"/>
    </>
  );
}

export default App;
