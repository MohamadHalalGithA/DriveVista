import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




export default function Steps(){
  useEffect(() => {
    AOS.init();
  }, [])  
  
  AOS.init({
    duration: 700,
  })

    return(
        <div className="steps-container">
              <h1 className="steps-title" data-aos = "fade-down">
                How's the Rental Going?
              </h1>
              <h2 className="steps-subtitle" data-aos = "fade-down">Our offer is simple and without surprises!</h2>
              <div className="steps-space">
                <div className="step">
                    <h1 className="step-num-bg" data-aos ="zoom-in">
                      1
                    </h1>
                    <h2 className="step-title" data-aos = "fade-right">
                    Choose the vehicle
                    </h2>
                    <h3 className="step-des" data-aos = "fade-right">
                    From our vast inventory of vehicles, choose the one that will suit your needs, your budget and your projects.
                    </h3>

                </div>
                <div className="step">
                <h1 className="step-num-bg" data-aos ="zoom-in">
                      2
                    </h1>
                    <h2 className="step-title" data-aos = "fade-up">
                    Book your vehicle
                    </h2>
                    <h3 className="step-des" data-aos = "fade-up">
                    Contact us to find out more about our daily and weekly rates or concerning our monthly promotions. It will be our pleasure to adequately advise you and come up with the tailor-made package that will be ideal for your needs.
                    </h3>
                </div>
                <div className="step">
                <h1 className="step-num-bg" data-aos ="zoom-in">
                      3
                    </h1>
                    <h2 className="step-title" data-aos = "fade-left">
                    Ride peacefully
                    </h2>
                    <h3 className="step-des" data-aos = "fade-left">
                    Whether you’re planning to take the back roads or the main highways, you can drive with peace of mind thanks to our quality vehicles!
                    </h3>
                </div>
              </div>

        </div>
       

        
    )
}