import react from "react"
import "./primary-button.css"

const PrimaryButton = ({text = "Button"}) => {

    return (
        <button className="primary-button">{text}</button>
    )
}

export default PrimaryButton;