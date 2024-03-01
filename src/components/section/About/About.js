import React, { useEffect, useState } from 'react';
import './About.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="about">

        <div data-aos="fade-right" class="note2">#About_us\</div>
        <div class="aboutcontant" >

          <div data-aos="fade-up" class="name">Quinn Future</div>
          {/* <div data-aos="fade-up" class="position">Quinn Future </div> */}
          <p data-aos="fade-up" data-aos-duration="3500" class="dis"><br />Quinn Future for innovative technology in data science’s and softwer engineering.
          </p>

          <div data-aos="fade-up" class="team">our team</div>

          <p data-aos="fade-up" data-aos-duration="3500" class="dis2"><br />Nomade creatives around the world, if you're a creative artist we welcoming you to join us.</p>

        </div>
        <div class="Background">
          <div class="outerAbout">
            <div className="aboutcont">

              <div class="innerAbout">

                <div className="bordertop"></div>

                <div class="boxabout">
                  <div className='name'> yaakoub belhardi</div>
                  <div className='dis2'> ceo founder <br />
                    <br />
                    software engineer
                  </div>

                </div>


                <div class="boxabout">

                  <div className='name'>kassia kaci</div>
                  <div className='dis2'> co founder <br />
                    <br />
                    sales & marketing manager
                  </div>
                </div>


                <div class="boxabout">

                  <div className='name'>noureddin taileb</div>
                  <div className='dis2'> co founder  <br />
                    <br />
                    financial director
                  </div>
                </div>


                <div className="borderbottom"></div>
              </div>
            </div>
          </div>
          <div class="Frame2" id="about_1"></div>
          <div class="Frame2" id="about_2"></div>
          <div class="Frame2" id="about_3"></div>
          <div class="Frame2" id="about_4"></div>
          <div class="Frame2" id="about_5"></div>
          <div class="Frame2" id="about_6"></div>
          <div class="Frame2" id="about_7"></div>
        </div>

      </section>
    </>

  )
}


export default About