import { Container } from "../StylesPages/PageLayout";
import './Home.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Home() {  
    const text = useRef(null);

    useEffect(() => {
        const typed = new Typed(text.current, {
        strings: ["Love deserves great care. You can afford it with Smile:) Pets Insurance"], 
        startDelay: 1200,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        });

    return () => {
      typed.destroy();
    };
  }, []);
    
    return (
        <Container>
            <div style={{height: "60vh"}} >
                <div style={{display: "grid", gridTemplateColumns:"60% 40%"}} >
                    <div className="typeText">
                        <span ref={text}></span>
                    </div>
                    <div>
                        <img className="photo1" src="https://drive.google.com/uc?id=16L46TNYnYu00LM2BNNYUcHMVlKIeofNC&authuser=0" />
                    </div>
                </div>
            </div>

            
            
        </Container>
    )      
}

export default Home;