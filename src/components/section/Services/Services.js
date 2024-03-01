import React, { useEffect, useState } from 'react';
import './Services.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

export const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section id="services">

                <div data-aos="fade-right" class="note">#services\</div>
                <div class="outer">
                    <div className="cont">
                        <div class="inner">
                            <div class="border_1_1" >

                            </div>
                            <div class="boxaservices">
                                <h1 data-aos="fade-right" class="ServH">BRANDING</h1>
                                <p data-aos="fade-up" class="ServP">#BRAND_STRATEGY<br />
                                    #LOGO_DESIGN<br />
                                    #LOGO_ANIMATION<br />
                                    #BRAND_VISUAL_IDENTETY<br />
                                    #SOCIAL_MEDIA_ADS_DESIGN<br />
                                    #EVENTS_ORGANIZATION<br />



                                </p>
                            </div>
                            <div class="boxaservices">
                                <h1 data-aos="fade-right" class="ServH">WEB DEVELOPMENT</h1>
                                <p data-aos="fade-up" class="ServP">#UI/UX_DESIGN<br />
                                    #WEB_APPLICATION <br />
                                    #MOBIL_APPLICATION <br />
                                    #DATA_SCIENCE <br />
                                    #BIG_DATA_engineering <br />

                                </p>
                            </div>
                            <div class="boxaservices">
                                <h1 data-aos="fade-right" class="ServH">FILMMAKING</h1>
                                <p data-aos="fade-up" class="ServP">#ADVERTISING_VIDEOS<br />
                                    #MUSIC_VEDIOS <br />
                                    #PODCASTS_ViDeOS <br />
                                    #cinematography<br />
                                    #documentary<br />
                                    #real_estate<br />
                                </p>
                            </div>
                            <div class="boxaservices">
                                <h1 data-aos="fade-right" class="ServH">3D DESIGN</h1>
                                <p data-aos="fade-up" class="ServP">#3D_PRODUCTS <br />
                                    #3D_MODELING<br />
                                    #3D_SCLUPTING<br />
                                    #3D_ANIMATIONS<br />
                                    #real_estate<br />

                                </p>
                            </div>
                            <div class="boxaservices">
                                <h1 data-aos="fade-right" class="ServH">MUSIC PRODUCING</h1>
                                <p data-aos="fade-up" class="ServP">#RAP_MUSIC <br />
                                    #POP_MUSIC <br />
                                    #ORCHESTRAL<br />
                                    #SOUND_DESIGN<br />
                                    #SFX <br />
                                    #RECORDING <br />
                                    #MASTERING <br />


                                </p>
                            </div>

                            <div class="border_1_2" ></div>

                        </div>
                    </div>
                </div>
                <div class="Frame2" id="services_1"></div>
                <div class="Frame2" id="services_2"></div>
                <div class="Frame2" id="services_3"></div>
                <div class="Frame2" id="services_4"></div>

            </section>
        </>

    )
}


export default Services