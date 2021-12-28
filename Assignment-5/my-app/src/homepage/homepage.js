import React from "react";
import './homepage.css';
import insta from '../images/insta.jpg';


const Homepage = () => {
    return(
        <div className="homelayout">
            <img className="iconpic" src={insta} alt="iconPic" />
            <div className="pagelink">
                <h1>10x Team 04</h1>
                <a href="./postview" className="Link"> Enter</a>
            </div>
        </div>
    );
}
export default Homepage;