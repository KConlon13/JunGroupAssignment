import React from 'react';
import './App.css';
import WelcomeScreen from "./WelcomeScreen"
import PhonePortrait from "./PhonePortrait"
import TabletPortrait from "./TabletPortrait"

function App() {

  const optimizedScreens=()=> {
    if (window.innerWidth === 375 && window.innerHeight === 667){
      return <PhonePortrait />
    } else if (window.innerWidth === 768 && window.innerHeight === 1024) {
      return <TabletPortrait />
    } else {
      return <WelcomeScreen />
    }
  }

  return (
    <div className="App">
      {optimizedScreens()}
    </div>
  );
}

export default App;