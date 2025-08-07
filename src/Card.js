import React from "react"
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Card(){
    const navigate = useNavigate();

    function goToCatalogue(){
      navigate("/CarsCatalogue")
  }
  
  function goToFinancing(){
    navigate("/Financing")
  }


  useEffect(() => {
    AOS.init();
  }, []) 

  AOS.init({
    duration: 900,
  })

  const contactClick = () => {
    // Scroll to the target element
    const targetSection = document.getElementById('Contact-us');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <div className = "card-container" style ={{marginBottom:"7%"}}>
            <div>
                <h1 className="card-title" data-aos = "zoom-in">
                Why buy from us?
                </h1>
                </div>
                <div className="card-space">
                    <div className = "card-1 left" data-aos = "fade-right">
                        <img src = "https://imgs.search.brave.com/2Z5T-pS552Z4cYIh6AY78qas8vNYkGVanAsPTD7fH5c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9sYXJn/ZS01NjkxNS0yMDI0/ZWxhbnRyYS1jb3B5/LTY0ZWY3ZWQzYzQ1/ZGIuanBnP2Nyb3A9/MC42ODJ4dzowLjYy/NXhoOzAuMTQzeHcs/MC4zMDR4aCZyZXNp/emU9OTgwOio" className="card-image"/>
                        <h1 className = "card-main-text">
                            PREMIUM QUALITY VEHICLES
                        </h1>
                        <p className = "card-body-text">
                        Our car rental takes pride in offering a curated selection of high-quality vehicles that redefine automotive standards. Each vehicle undergoes rigorous inspections, ensuring not only peak performance but also an unmatched level of sophistication and reliability. Elevate your driving experience with DriveVista – where premium quality meets the thrill of the open road.
                        </p>
                        <button className= "card-shopButton" onClick={goToCatalogue}>
                            VIEW CATALOGUE
                        </button>
                    </div>
                    <div className = "card-1 mid" data-aos = "fade-right">
                    <img src = "https://imgs.search.brave.com/hs7xnK1y2PwpvUENdtLWQdrQnm2Ai8JnWP3rqpxryC0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzgwLzMyLzkx/LzM2MF9GXzQ4MDMy/OTE0M191ZGJ5d1JB/a0lrOExPYk5nd0Zu/TGhXcWJPeWplblhj/YS5qcGc" className="card-image"/>
                        <h1 className = "card-main-text">
                            GREAT CUSTOMER SERVICE
                        </h1>
                        <p className = "card-body-text">
                        At DriveVista Rentals, we redefine your journey with a commitment to unparalleled customer service. Our dedicated team goes above and beyond to ensure your car rental experience is seamless, from swift reservation processes to personalized assistance. We take pride in providing not just vehicles, but a service that anticipates.
                        </p>
                        <button className= "card-shopButton" onClick={contactClick}>
                            CONTACT US
                        </button>
                    </div>
                    <div className = "card-1 right" data-aos = "fade-right">
                    <img src = "https://wealthyretirement.com/wp-content/uploads/2018/11/Man_Checking_Stock_Positions.jpg" className="card-image"/>
                        <h1 className = "card-main-text">
                            FINANCING PLANS
                        </h1>
                        <p className = "card-body-text">
                        
Embark on the road to affordability with  Financing plans at DriveVista Rentals. Our flexible financing plans cater to every budget, offering you the freedom to choose the payment structure that suits you best. Experience the joy of driving a quality vehicle without compromising your financial comfort, as we tailor our financing options to make your dream car rental accessible and stress-free.





                        </p>
                        <button className= "card-shopButton" onClick={goToFinancing}>
                            VIEW FINANCING
                        </button>
                    </div>
                </div>

        </div>
    )
}