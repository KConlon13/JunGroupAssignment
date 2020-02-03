import React from "react";
import './App.css';
import TacoBellWhiteLogo from "./tacobellwhitelogo.png"

class WelcomeScreen extends React.Component {
    render(){
        return(
            <div id="Welcom-background">
                <img id="App-logo" src={TacoBellWhiteLogo} alt="Taco Bell White"/>
                <h1 id="Headline-top">Welcome to Kyle Conlon's Take-Home Technical Assignment</h1>
                <h3 id="Headline-bottom">Please adjust your viewing to see the iPhone 8 (375x667)and iPad Pro (768x1024) screens. Enjoy!</h3>
            </div>
        )
    }
}

export default WelcomeScreen;