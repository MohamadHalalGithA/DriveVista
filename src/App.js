import logo from './logo.svg';
import './App.css';

import Header from "./Header"
import Hero from "./Hero"
import Card from "./Card"
import About from "./About"
import Steps from "./Steps"
import Cars from "./FeaturedCars"
import CarCards from './carCards';
import Contact from './Contact'
import Footer from './Footer'




function App() {
  const fCars = Cars.map(car =>{
    return(<CarCards carInfo = {car} key = {car.id}/>)
  })
  
  return(
  <>
    <Header/>
    <Hero/>
    <About/>
    <Card/>
    <Steps/>
    <div className='featuredCars-container'> 
          <h1 style ={{overflow:"hidden"}}>
            Featured Vehicles
          </h1>
          <div className='featuredCars-Cards-container'>
            {fCars}
            
          </div>
          
    </div>
    <Contact/>
    <Footer/>
  </>)
}
 
export default App;
