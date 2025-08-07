import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";


export default function Financing(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
  
  <>
    <Header/>
    
    <div className = "About-container Financing-container">
              <img src ="https://media.istockphoto.com/id/1331285518/photo/contract-signing-female-customer-sign-papers-in-dealership-office-closeup-shot.jpg?s=612x612&w=0&k=20&c=mTbW_rmfXd9oDPWDJoofepWqIEnkACYADKOaCliXbqQ=" className="FinancingImg"/>
            <div className = "About-text-container Financing-text-container">
              <h2>
              Get Your Deal at DriveVista
              </h2>
              <div>
              <p className="About-body-text Financing-body-text">
              
              Our commitment to customer satisfaction extends beyond providing top-notch vehicles; it encompasses ensuring accessibility for everyone. 
              <br></br>
              <br></br>
              Our financing plans are carefully crafted. Whether you're a student, a young professional just starting your career, or anyone facing temporary financial challenges, we have a financing solution for you.
              
                            </p>
                            <section className="checksection">
  <div className="checkdiv">
    <ul class="check-list">
      <li>Reliable</li>
      <li>Competitive Prices</li>
      <li>Industry Approved</li>
      <li>Expanding Car Roster</li>
    </ul>
  </div>
</section>
              </div>
              
              <button className="shopButtonDarkFinancing">
                BOOK APPOINTMENT
              </button>
              </div>
            
            
    </div>
    <Contact/>
    <Footer/>
  </>
  )
    }