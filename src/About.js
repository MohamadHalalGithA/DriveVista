import React from "react"
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




export default function About(){
  const navigate = useNavigate();

  function goToCatalogue(){
    navigate("/CarsCatalogue")
}

useEffect(() => {
  AOS.init();
}, [])  

AOS.init({
  duration: 900,
})

  return(<div className = "About-container" data-aos = "fade-up">
              <img src ="https://imgs.search.brave.com/7sPwCLWyzkgXhdLdDyq6ld5CmNK7Wg7FeoItsxpgPU0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE0/Nzc1NzcwL3Bob3Rv/L21hbi1kcml2aW5n/LWNhci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ODlhLTEx/TWRwazZlLVpWMzdG/c2x1c0dnVG1ITGZh/MUVVMUhoWDZnTWIy/WT0" className="About-img"/>
            <div className = "About-text-container">
              <h1>
                About DriveVista!
              </h1>
              <h2>
              At DriveVista, our mission is to be of service... no matter your budget!
              </h2>
              <p className="About-body-text">
              How do we expect to get there? By offering you a flexible and turnkey solution for newer vehicle rentals.

We propose to adapt to your needs, to your small and large projects, offering you a complete range of quality vehicles.
No need to worry about the maintenance, we take care of it!

Our goal: to accompany you, in all transparency, by providing a simple rental process and efficient service.

At DriveVista, our mission is to promise you'll drive with peace of mind!
              </p>
              <button className="About-shopButton" onClick={goToCatalogue} >
                RENT NOW
              </button>
              </div>
            
            
    </div>)
}