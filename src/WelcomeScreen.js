import React from "react";
import './App.css';
import TacoBellWhiteLogo from "./tacobellwhitelogo.png"

class PhonePortrait extends React.Component {
    render(){
        return(
            <div style={styles.background}>
                <img className="App-logo" style={styles.welcomeImage} src={TacoBellWhiteLogo} alt="Taco Bell White"/>
                <h1 style={styles.headlineTop}>Welcome to Kyle Conlon's Take-Home Technical Assignment</h1>
                <h3 style={styles.headlineBottom}>Please adjust your viewing to see the iPhone 8 (375x667)and iPad Pro (768x1024) screens</h3>
                <h3 style={styles.headlineBottom}>These are rotatable as well, for your viewing pleasure. Enjoy!</h3>
            </div>
        )
    }
}

const styles=({
    background: {
        background: "black",
        textAlign: "center"
    },
    headlineTop: {
        color: "white",
        marginBottom: "2%"
    },
    headlineBottom: {
        color: "white",
        fontSize: "15px",
        marginBottom: "0%",
        marginTop: ".8%"
    },
    welcomeImage: {
        marginTop: "5%",
        marginBottom: "2%"
    }
})

export default PhonePortrait;