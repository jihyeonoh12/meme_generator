import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Body from './components/Body'


function App() {

  const [darkmode, setDarkmode] = React.useState(true);

  function handleToggle() {
    setDarkmode( prevMode => !prevMode)
  }
  const modeName = darkmode === true ? 'light' : 'dark'


  return (
    <div className={'App ' + modeName}>
      <Navbar 
      darkMode={darkmode} 
      toggle = {handleToggle}  
      />
      <Body darkMode={darkmode}/>
    </div>
  );
}

export default App;
