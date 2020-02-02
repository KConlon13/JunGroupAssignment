import React from "react";
// import './App.css';
import './PortraitStyling.css';
import BelluminatiLogo from "./BelluminatiLogo.png"

class PhonePortrait extends React.Component {
    // This component is for the iPhone 8 Portrait View
    render(){
        return(
            <div className="PhonePortrait">
                <img className="Taco-Bell-Logo" src={BelluminatiLogo} alt="Taco Bell White"/>
                <h3 className="Portrait-Small-Title-Copy">Welcome to the</h3>
                <div className="center text">
                <label data-content="BELLUMINATI"><span>BELLUMINATI</span></label>
                    {/* <h3 className="Portrait-Large-Title-Copy">BELLUMINATI</h3> */}

                </div>
                <h4 className="Portrait-Copy">Congratulations. You've discovered the secret world of the Belluminati, where the dollar truly gets you more. From morning to late night, your dollar will always get you the most at Taco Bell - for it is the order of the Belluminati.</h4>
                <h3 className="Portrait-Tagline-Copy">#TheDollarReignsSupreme</h3>
                <a href="https://www.tacobell.com/" target="_blank" rel="noopener noreferrer">
                    <button class="ui inverted button">UNCOVER MORE SECRETS HERE</button>
                </a>

                <div className="Social-Button-Group">
                    <a href="https://www.facebook.com/tacobell/" target="_blank" rel="noopener noreferrer">
                        <button class="ui circular facebook icon button">
                            <i class="facebook icon"></i>
                        </button>
                    </a>
                    <a href="https://www.instagram.com/tacobell/?hl=en" target="_blank" rel="noopener noreferrer">
                        <button class="ui purple circular instagram icon button">
                            <i class="instagram icon"></i>
                        </button>
                    </a>
                    <a href="https://twitter.com/tacobell?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                        <button class="ui circular twitter icon button">
                            <i class="twitter icon"></i>
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default PhonePortrait;