import React, { useState, useEffect, useRef } from 'react';
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import "./style.css";


export default function Header() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xffa43f,
          backgroundColor: 0x90909
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <header ref={vantaRef} className="header" id="header">

        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Egor</em></strong><br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>  
    </header>
  )
}
