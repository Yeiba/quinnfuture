import React, { useEffect, useState } from 'react';
import './Home.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

import { TypeAnimation } from 'react-type-animation';


export const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);


  return (
    <>
     <section class="home" id="home">
            <div class="contant" >
                <div class="Arrow">
                  <a href="#contact">
                    <p >
                      •click• <br/>•if you're on fire!•
                    </p>

                   
                  </a>
                 
                </div>
                <div   data-aos="fade-right" class="homeTitele">
                
                  <span>we create all<br/> @wow's<br/>{" "}</span>
                  
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      1500,
                      '#DESIGN_IDEAS\\',
                      1500, // wait 1s before replacing "Mice" with "Hamsters"
                      '#branding\\',
                      1500,
                      '#strategies\\',
                      1500,
                      '#development\\',
                      1500,
                      '#advertising\\',
                      1500,
                      '#production\\',
                      1500,
                      '#Eventes\\',
                      1500,
                    ]}
                    wrapper="span"
                    speed={5}
                   
                    repeat={Infinity}
                  />
                </div>
                
                <p data-aos="fade-up" data-aos-duration="2800" class="homeP">NO NEED TO SPEND more hours ON JUST<br/> searching FOR creative agency.<br/> our agency create beitching ideas.</p>
                
               
                


             
            </div>
            <div class="Background">
                <div class="Frame1" id="home_1"></div>
                <div class="Frame1" id="home_2"></div>
                <div class="Frame1" id="home_3"></div>
                <div class="Frame1" id="home_4"></div>
                <div class="Frame1" id="home_5"></div>
                <div class="Frame1" id="home_6"></div>
                <div class="Frame1" id="home_7"></div>
                <div class="Frame1" id="home_8"></div>
                <div class="Frame1" id="home_9"></div>
            </div>
        </section>
    </>
    
  )
}


export default Home