import React from "react";
import './App.css';
import TacoBellWhiteLogo from "./tacobellwhitelogo.png"

class PhonePortrait extends React.Component {
    render(){
        return(
            <div style={{background: "black"}}>
                <h1 style={{color: "white"}}>Welcome to Kyle's Code Challenge Attempt</h1>
                <h3 style={{color: "white"}}>Please adjust your viewing to see the iPhone 8 and iPad Pro screens</h3>
                <h3 style={{color: "white"}}>These are rotable as well, for your viewing pleasure. Enjoy!</h3>
                <img className="App-logo" src={TacoBellWhiteLogo} alt="Taco Bell White"/>
            </div>
        )
    }
}

export default PhonePortrait;