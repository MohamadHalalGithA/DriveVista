import LOGO from "./images/darkLogo.png"


export default function Footer(){
  return(
      <footer className="footer-container">
            <div className="copyright-text">
            © 2024 DriveVista
            </div>
            <div style={{display: "flex", alignItems: "center", gap:"10%"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/960px-Flag_of_Canada_%28Pantone%29.svg.png" width={"60px"}/>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" width={"60px"}/>
            </div>

            <div>
            <img src= {LOGO} alt = "logo "width = "112px"/>
            </div>
      </footer>)
}