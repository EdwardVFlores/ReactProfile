import react from "react"
import "./primary-button.css"
import IsLink from "../../../utils/is-link"


const PrimaryButton = ({text = "Button", link, buttonClass}) => {


    return (
        (IsLink(link)) ? 
        <a className="primary-button" href={link}><i class={buttonClass}></i>{text}</a> :
        <button className="primary-button"> {text}</button>
    )
}

export default PrimaryButton;