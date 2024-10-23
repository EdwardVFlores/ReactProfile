import react from "react";
import "./socials.css"
import PrimaryButton from "../common/primary-button/primary-button";

const Socials = () => {
    
    return (
        <div id="socials" className="socials-container-holder">
            <div className="socials-container">
                <h2 className="socals-tiitle">Socials</h2>
                <div className="socials-button-container">
                    <PrimaryButton text="Linked In" link="https://www.linkedin.com/in/edward-flores-b27350178/"/>
                    <PrimaryButton text="A really really long text" link="no idea"/>
                </div>
            </div>
        </div>
    )
}

export default Socials;