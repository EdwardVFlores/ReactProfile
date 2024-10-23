import react from "react";
import "./header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    
    return (
    <div className="header-container-holder">
        <div className="header-container">
            <h1 className="header-text">Edwards Portfolio</h1>
            <h2 className="header-job"> <i class="fas fa-code"></i> Software Engineer</h2>
        </div>
    </div>
    )
}

export default Header;