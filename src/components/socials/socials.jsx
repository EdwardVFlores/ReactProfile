import react from "react";
import "./socials.css"
import PrimaryButton from "../common/primary-button/primary-button";

const Socials = () => {
    
    return (
        <div className="socials-container-holder">
            <div className="socials-container">
                <h2 className="socals-tiitle">Socials</h2>
                <ul>
                    <li>
                        <PrimaryButton text="LinkedIn"/>
                    </li>
                    <li>
                        <PrimaryButton/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Socials;