import React from "react"
import LOGO from "./images/logo.jpeg"
import { useNavigate } from "react-router-dom"




export default function Header(){

    const navigate = useNavigate()

    const handleButtonClick = () => {
        // Scroll to the target element
        const targetSection = document.getElementById('Contact-us');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    function goToHome(){
        navigate("/")
    }
    function goToCatalogue(){
        navigate("/CarsCatalogue")
    }
    function goToFinancing(){
        navigate("/Financing")
    }

    return(
        <header className = "header__menu">
                    <img src= {LOGO} style ={{cursor:"pointer"}} alt = "logo "width = "112px" onClick={goToHome}/>
                    <nav className = "menu">
                       <a onClick={handleButtonClick}> Contact Us </a>
                       <a onClick={goToFinancing}>Financing </a>
                       <a onClick={goToCatalogue}>Catalogue</a> 
                    </nav>
                    <button className = "shopButton" onClick={goToCatalogue}> SHOP NOW </button>
            </header>)
}
