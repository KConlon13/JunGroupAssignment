import React from "react";
import './App.css';
import BelluminatiLogo from "./BelluminatiLogo.png"

class TabletPortrait extends React.Component {
    render(){
        return(
            <div className="TabletPortrait">
                <img className="Taco-Bell-Logo-Tablet" src={BelluminatiLogo} alt="Taco Bell White"/>
                <h3 className="Tablet-Small-Title-Copy">Welcome to the</h3>
                <h3 className="Tablet-Large-Title-Copy">BELLUMINATI</h3>
                <h4 className="Tablet-Copy">Congratulations. You've discovered the secret world of the Belluminati, where the dollar truly gets you more. From morning to late night, your dollar will always get you the most at Taco Bell - for it is the order of the Belluminati.</h4>
                <h3 className="Tablet-Tagline-Copy">#TheDollarReignsSupreme</h3>
                <a href="https://www.tacobell.com/" target="_blank" rel="noopener noreferrer">
                    <button class="ui inverted button" style={styles.CTAbutton}>UNCOVER MORE SECRETS HERE</button>
                </a>

                <div className="Social-Button-Group" style={styles.socialGroup}>
                    <a href="https://www.facebook.com/tacobell/" target="_blank" rel="noopener noreferrer">
                        <button class="ui circular facebook icon button" style={styles.socialButtons}>
                            <i class="facebook icon" style={styles.socialIcons}></i>
                        </button>
                    </a>
                    <a href="https://www.instagram.com/tacobell/?hl=en" target="_blank" rel="noopener noreferrer">
                        <button class="ui purple circular instagram icon button" style={styles.socialButtons}>
                            <i class="instagram icon" style={styles.socialIcons}></i>
                        </button>
                    </a>
                    <a href="https://twitter.com/tacobell?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                        <button class="ui circular twitter icon button" style={styles.socialButtons}>
                            <i class="twitter icon" style={styles.socialIcons}></i>
                        </button>
                    </a>
                </div>
            </div>
        )
    }
}

const styles = ({
    CTAbutton: {
        color: "white",
        marginTop: "14%",
        marginLeft: "8%",
        marginRight: "8%",
        background: "#702082",
        borderColor: "#702082",
        boxShadow: "0 0 0 2px #702082 inset!important",
        fontFamily: "'Teko', sansserif",
        fontWeight: "600",
        borderRadius: "0",
        letterSpacing: "0.2px",
        paddingLeft: "3%",
        paddingRight: "3%",
        fontSize: "28px",
        height: "70px",
        width: "400px"
    },
    socialButtons: {
        height: "65px",
        width: "65px"
    },
    socialIcons: {
        fontSize: "2.6em",
        display: "inline",
        verticalAlign: "-45%",
    },
    socialGroup: {
        marginTop: "5%"
    }
})

export default TabletPortrait;