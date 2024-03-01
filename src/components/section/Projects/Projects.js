import React, { useEffect, useState } from 'react';
import './Projects.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

export const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section id="work">

                <div data-aos="fade-right" class="note">#projects\</div>
                <div class="outer">
                    <div className="cont">
                        <div class="inner">
                            <div class="border_2_1" ></div>
                            <a href="https://www.behance.net/gallery/175804979/Nla-Milk-Box-3D-Packaging" target='_blank' >
                                <div class="boxproject">

                                    <h1 data-aos="fade-right" class="WorkH">
                                        Nula<br />

                                    </h1>
                                    <p data-aos="fade-up" class="WorkP">

                                        • click • <br />
                                        • to See the project •  <br />
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.behance.net/quinnfuture" target='_blank' >
                                <div class="boxproject">
                                    <h1 data-aos="fade-right" class="WorkH">
                                        Bricool<br />

                                    </h1>

                                    <p data-aos="fade-up" class="WorkP">

                                        • click • <br />
                                        • to See the project •  <br />
                                    </p>
                                </div>
                            </a>

                            <a href="https://www.behance.net/quinnfuture" target='_blank' >
                                <div class="boxproject">
                                    <h1 data-aos="fade-right" class="WorkH">
                                        kacademy <br />

                                    </h1>

                                    <p data-aos="fade-up" class="WorkP">

                                        • click • <br />
                                        • to See the project •  <br />


                                    </p>

                                </div>
                            </a>

                            <a href="https://www.behance.net/quinnfuture" target='_blank' >
                                <div class="boxproject">
                                    <h1 data-aos="fade-right" class="WorkH">
                                        iprobooking<br />

                                    </h1>

                                    <p data-aos="fade-up" class="WorkP">

                                        • click • <br />
                                        • to See the project •  <br />
                                    </p>
                                </div>
                            </a>

                            <a href="https://www.behance.net/quinnfuture" target='_blank' >
                                <div class="boxproject">

                                    <p data-aos="fade-right" class="WorkP" >
                                        • click • <br />
                                        • to See all projects •  <br />
                                        • on behance •  <br />
                                    </p>
                                </div>
                            </a>
                            <div class="border_2_2" ></div>
                        </div>
                    </div>
                </div>
                <div class="Frame3" id="work_1"></div>
                <div class="Frame3" id="work_2"></div>
                <div class="Frame3" id="work_3"></div>
                <div class="Frame3" id="work_4"></div>

            </section>
        </>

    )
}


export default Projects