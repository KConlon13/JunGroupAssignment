import React from 'react';
import './App.css';
import WelcomeScreen from "./WelcomeScreen"
import PhonePortrait from "./PhonePortrait"
import PhoneLandscape from "./PhoneLandscape"
import TabletLandscape from "./TabletLandscape"
import TabletPortrait from "./TabletPortrait"

function App() {

  const optimizedScreens=()=> {
    if (window.innerWidth === 375 && window.innerHeight === 667){
      return <PhonePortrait />
    } else if (window.innerWidth === 667) {
      return <PhoneLandscape />
    } else if (window.innerWidth === 768 && window.innerHeight === 1024) {
      return <TabletPortrait />
    } else if (window.innerWidth === 1024){
      return <TabletLandscape />
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