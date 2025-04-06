import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
 

  return (
    <div className="Footer">
      <div className="Footertop">
        <h1>Contact</h1>
        </div>
      <div className="Footerbtm">
        <h2>SPENCERGMAIL.COM</h2>
       <a href="https://www.instagram.com/spencergab/"> <h3>Instagram</h3></a>
       <a href="https://dribbble.com/spencergabor"><h3>Dribbble</h3></a> 
        <h6>All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
