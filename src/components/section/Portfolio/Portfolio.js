import React, { useEffect, useState } from 'react';
import './Portfolio.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

export const Portfolio = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
  return (
    <>
     <section className='portfolio' id="portfolio">
            
            <div class="outer2">
                <div data-aos="fade-right" class="note">#Portfolio\</div>
                
                <div class="inner3">
                    
                    
                    
                    <div class="box3">
                        <h1 data-aos="fade-right" class="WorkH">
                            Nula<br/> 
                            full branding <br/> 
                            </h1>
                        <p data-aos="fade-up" class="WorkP">
                           
                            virtual project  <br/>
                            #suggestion_project <br/>
                            

                        </p>
                    </div>
                    <div class="box3">
                        <h1 data-aos="fade-right" class="WorkH">
                            Bricool<br/> 
                            full branding <br/> 
                        </h1>
                        <p data-aos="fade-up" href="" class="WorkP">

                            real project  <br/>
                            #suggestion_project <br/>
                           
                        </p>
                       
                    </div>
                    <div class="box3">
                        <h1 data-aos="fade-right" class="WorkH">
                            kacademy <br/> 
                            full branding <br/> 
                            </h1>
                        <p data-aos="fade-up" href="" class="WorkP">

                            real project  <br/>
                            #suggestion_project <br/>
                          

                        </p>
                        
                    </div>
                    <div class="box3">
                        <h1 data-aos="fade-right" class="WorkH">
                            iprobooking<br/> 
                            full branding <br/> 
                            DATA SCIENCE <br/>
                            </h1>
                        <p data-aos="fade-up" href="" class="WorkP">

                            real project  <br/>
                            #suggestion_project <br/>

                        </p>
                       
                    </div>
                    <div class="box4">
                        <h1 data-aos="fade-right" class="WorkH">
                            see  <br/>
                            all projects
                        </h1>
                    </div>
                    
                </div>
                
                <div class="Frame3" id="folio_1"></div>
                <div class="Frame3" id="folio_2"></div>
                <div class="Frame3" id="folio_3"></div>
                <div class="Frame3" id="folio_4"></div>
            </div>
        
        </section>
    </>
    
  )
}


export default Portfolio