import React from "react"
import { useNavigate } from "react-router-dom"
import Cars from "./Cars"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Hero(){

  const navigate = useNavigate()
    const NP = Cars[0]
    function goToBuyPage(){
      navigate("/buyCar", {state: {carInfo: NP}})

      }

      function goToCatalogue(){
        navigate("/CarsCatalogue")
    }


    useEffect(() => {
      AOS.init();
    }, [])    
  return(
  <div className = "hero-container">
    <div className = "hero-text">
    <h2 className = "hero-company-text" data-aos = "fade-right">
        DriveVista
      </h2>
      <div className="hero-title-container" data-aos = "fade-right" >
      <h1 className = "hero-1-text" data-aos = "fade-right">
        CAR OF THE WEEK
      </h1>
      <h3 className = "hero-trending" data-aos = "fade-right"> TRENDING</h3>
      </div>
      <h1 className = "hero-main-text" data-aos = "fade-right">
        CHECK OUT THE NEW 2023 Nissan Pathfinder
      </h1>
      <h1 className="hero-price" data-aos = "fade-right">
        ONLY $90/DAY
      </h1>
      <div className = "hero-buttons" data-aos = "fade-right">
        <button className = "shopButtonSolid" onClick={goToBuyPage} data-aos = "fade-right">
          RENT NOW
        </button>
        <button className = "shopButtonDark" onClick={goToCatalogue} data-aos = "fade-right">
          VIEW MORE 
        </button>
      </div>
    </div>
    <img src = "https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2023/nissan/pathfinder/s/suv/exteriorColors/2023_nissan_pathfinder_s_032_kh3.png" className = "hero-car" data-aos = "fade-left"/>
    <div className = "hero-buttons-mobile">
        <button className = "shopButtonSolid" data-aos = "fade-down">
          RENT NOW
        </button>
        <button className = "shopButtonDark" data-aos = "fade-down">
          VIEW MORE 
        </button>
      </div>
    
    
      

  </div>)
}