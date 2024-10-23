import react from "react";
import "./socials.css"
import PrimaryButton from "../common/primary-button/primary-button";

const Socials = () => {
    
    return (
        <div id="socials" className="socials-container-holder">
            <div className="socials-container">
                <h3 className="socials-title">Socials</h3>
                <div className="socials-button-container">
                    <PrimaryButton text="Linked In" link="https://www.linkedin.com/in/edward-flores-b27350178/" buttonClass="fab fa-linkedin"/>
                </div>
            </div>
        </div>
    )
}

export default Socials;