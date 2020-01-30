import React from 'react';
import './App.css';
import WelcomeScreen from "./WelcomeScreen"
import PhonePortrait from "./PhonePortrait"
import PhoneLandscape from "./PhoneLandscape"
import TabletLandscape from "./TabletLandscape"
import TabletPortrait from "./TabletPortrait"
import AltTabletLandscape from "./AltTabletLandscape"

function App() {

  const optimizedScreens=()=> {
    if (window.innerWidth === 375){
      return <PhonePortrait />
    } else if (window.innerWidth === 667) {
      return <PhoneLandscape />
    } else if (window.innerWidth === 1024) {
      return <TabletPortrait />
    } else if (window.innerWidth === 1366){
      return <TabletLandscape />
    } else  if (window.innerWidth === 768){
      return <AltTabletLandscape />
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