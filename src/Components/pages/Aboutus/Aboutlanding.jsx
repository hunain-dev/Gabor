import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Aboutlanding = () => {
    const textRefs = useRef([]);

    const obj = [
        { h2: "Spencer Gabor is an illustrator, designer and muralist based in Brooklyn, New York." },
        { h2: "His work is headlined by bold and zaney characters, abstract shapes and bright colors." },
        { h2: "Clients include Apple, Amazon, Adobe, NPR, Lululemon, The New York Times, Harvard Business Review, Twilio, ShakeShack, Jagermeister, SkullCandy, & Others" }
    ];
    useEffect(() => {
        textRefs.current.forEach((text) => {
            gsap.to(text, {
                color: "#1C1B1BFF", // 👈 Yeh color scroll hone pe change hoga
                duration: 1,
                scrollTrigger: {
                    trigger: text,
                    start: "top 30%", // Jab text 80% viewport pe ho tab effect chalu ho
                    end: "top 50%",
                    
                    scrub: true, // Smooth transition scroll ke saath
                },
            });
        });
    }, []);
  return (
    <div className="Aboutlanding">

        <h1>about</h1>
        {
            obj.map((elem,index)=>(
                <div key={index} className="Aboutlandingbottom">
                    <h2  ref={(el) => (textRefs.current[index] = el)}>{elem.h2}</h2>
                </div>
            ))
        }
   
      
    </div>
  )
}

export default Aboutlanding
