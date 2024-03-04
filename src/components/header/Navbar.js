import React, { useEffect, useState } from 'react';
import './Navbar.css';

import Aos from 'aos'
import 'aos/dist/aos.css';

export const Navbar = () => {

  const [activeSection, setActiveSection] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);


  useEffect(() => {
    // Check the window width
    const isWideEnough = window.innerWidth > 1025;

    if (isWideEnough) {
      Aos.init({
        duration: 2000
      });
    } else {
      // If not wide enough, disable AOS
      Aos.init({
        disable: true
      });
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  ////////////////////////////////////////////////////////////////
  const handleScroll = () => {
    const sectionOffsets = {
      home: document.getElementById('home').offsetTop,
      services: document.getElementById('services').offsetTop,
      work: document.getElementById('work').offsetTop,
      about: document.getElementById('about').offsetTop,
      contact: document.getElementById('contact').offsetTop
    };

    let active = 0;
    let scrollY = window.scrollY;

    // Determine the active section based on scroll position
    for (const section in sectionOffsets) {
      if (scrollY >= sectionOffsets[section] - 50) {
        active = section;
      }
    }

    setActiveSection(active);
  };

  // Function to toggle the visibility of the mobile menu
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Function to scroll to a section when a menu item is clicked
  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuVisible(false); // Close the menu when a section is clicked
    }
  };
  //////////////////////////


  return (
    <>
      <body>
        <header>
          <a data-aos="fade-down" data-aos-duration="2800" href="#home" className="Logo">
            <svg xmlns="http://www.w3.org/2000/svg">
              <g >
                <path d="M23.5745 18.3856C24.2172 16.8728 24.5337 15.2591 24.5337 13.5244C24.5337 11.8402 24.2172 10.2366 23.5745 8.7339C22.9317 7.2211 22.0417 5.88983 20.8947 4.71993C19.7476 3.56012 18.4423 2.64235 16.959 1.97672C15.4757 1.31109 13.9034 0.978272 12.2322 0.978272C10.5314 0.978272 8.9492 1.31109 7.46591 1.97672C5.98262 2.64235 4.68721 3.56012 3.56979 4.71993C2.45238 5.88983 1.57229 7.2211 0.949308 8.7339C0.316436 10.2467 4.26341e-08 11.8402 4.9245e-08 13.5244C5.60538e-08 15.2591 0.316436 16.8728 0.949308 18.3856C1.58218 19.8984 2.45238 21.2195 3.57968 22.3592C4.6971 23.4988 6.00239 24.3964 7.4758 25.0419C8.95909 25.6874 10.5413 26.0101 12.2421 26.0101C13.1222 26.0101 13.9627 25.9193 14.7934 25.7479L25.0677 25.7479C25.5225 25.7479 25.8884 25.3747 25.8884 24.9108L25.8884 21.865C25.8884 21.4011 25.5225 21.0279 25.0677 21.0279L22.0516 21.0279C22.6548 20.2009 23.169 19.3336 23.5745 18.3856ZM9.44363 20.7153C8.54377 20.3119 7.74279 19.7572 7.06048 19.031C6.37816 18.315 5.84418 17.4779 5.45852 16.5299C5.07286 15.5919 4.88498 14.5834 4.88498 13.5143C4.88498 12.4453 5.07286 11.4469 5.43874 10.4988C5.80462 9.56089 6.32872 8.7339 7.00115 8.01784C7.67357 7.31186 8.45477 6.75717 9.35464 6.35376C10.2545 5.95034 11.2137 5.75872 12.2619 5.75872C13.3101 5.75872 14.2693 5.96043 15.1691 6.35376C16.0591 6.75717 16.8403 7.31186 17.5029 8.01784C18.1654 8.72381 18.6895 9.55081 19.0653 10.4988C19.441 11.4469 19.6388 12.4453 19.6388 13.5143C19.6388 14.6036 19.4509 15.6121 19.085 16.5601C18.7192 17.5081 18.205 18.3251 17.5523 19.0411C16.8997 19.7471 16.1283 20.3018 15.2483 20.7052C14.3682 21.1086 13.4189 21.3002 12.3904 21.3002C11.3324 21.3103 10.3534 21.1086 9.44363 20.7153Z" fill="#D1D1D1" />
                <path d="M41.2949 17.2056C41.2949 19.5554 39.1787 21.4011 36.7856 20.8665C35.0848 20.4833 33.9278 18.8596 33.9278 17.0845L33.9278 9.27849C33.9278 8.91541 33.6312 8.61285 33.2752 8.61285L29.6362 8.61285C29.2802 8.61285 28.9835 8.91541 28.9835 9.27849L28.9835 16.9938C28.9835 21.4111 32.494 25.5663 36.8054 25.9596C41.9178 26.4336 46.2293 22.3188 46.2293 17.1955L46.2293 9.27849C46.2293 8.91541 45.9326 8.61285 45.5766 8.61285L41.9376 8.61285C41.5816 8.61285 41.285 8.91541 41.285 9.27849L41.285 17.2056L41.2949 17.2056Z" fill="#D1D1D1" />
                <path d="M62.5554 17.4174C62.5554 15.0675 64.6716 13.2219 67.0646 13.7564C68.7654 14.1397 69.9224 15.7634 69.9224 17.5384L69.9224 25.3445C69.9224 25.7075 70.2191 26.0101 70.5751 26.0101L74.2141 26.0101C74.5701 26.0101 74.8667 25.7075 74.8667 25.3445L74.8667 17.6292C74.8667 13.2118 71.3563 9.05666 67.0448 8.66333C61.9324 8.18932 57.621 12.3041 57.621 17.4275L57.621 25.3546C57.621 25.7176 57.9176 26.0202 58.2736 26.0202L61.9027 26.0202C62.2587 26.0202 62.5554 25.7176 62.5554 25.3546L62.5554 17.4174Z" fill="#D1D1D1" />
                <path d="M82.6887 17.4174C82.6887 15.0675 84.8049 13.2219 87.1979 13.7564C88.8987 14.1397 90.0557 15.7634 90.0557 17.5384L90.0557 25.3445C90.0557 25.7075 90.3524 26.0101 90.7084 26.0101L94.3474 26.0101C94.7034 26.0101 95 25.7075 95 25.3445L95 17.6292C95 13.2118 91.4896 9.05666 87.1781 8.66333C82.0657 8.18932 77.7543 12.3041 77.7543 17.4275L77.7543 25.3546C77.7543 25.7176 78.0509 26.0202 78.4069 26.0202L82.0459 26.0202C82.4019 26.0202 82.6986 25.7176 82.6986 25.3546L82.6986 17.4174L82.6887 17.4174Z" fill="#D1D1D1" />
                <path d="M52.0339 5.48642C53.5194 5.48642 54.7237 4.25825 54.7237 2.74321C54.7237 1.22818 53.5194 1.50377e-08 52.0339 9.68748e-09C50.5485 4.33724e-09 49.3442 1.22818 49.3442 2.74321C49.3442 4.25825 50.5485 5.48642 52.0339 5.48642Z" fill="#D1D1D1" />
                <path d="M50.5803 8.61285L53.4776 8.61285C53.9127 8.61285 54.2786 8.97593 54.2786 9.42977L54.2786 25.1931C54.2786 25.6369 53.9226 26.0101 53.4776 26.0101L50.5803 26.0101C50.1452 26.0101 49.7793 25.647 49.7793 25.1931L49.7793 9.42977C49.7892 8.97593 50.1452 8.61285 50.5803 8.61285Z" fill="#D1D1D1" />
              </g>
              <defs>
                <clipPath id="clip0_53_171">
                  <rect width="95" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <div data-aos="fade-down" data-aos-duration="2800" className={`menu ${isMenuVisible ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="Component2" >

              <div style={{ width: 54, height: 26, position: 'relative' }}>
                <div style={{ width: 30.20, height: 6.12, left: 0, top: 0, position: 'absolute', background: '#D1D1D1', borderRadius: 2 }} />
                <div style={{ width: 30.20, height: 6.12, left: 23.80, top: 19.88, position: 'absolute', background: '#D1D1D1', borderRadius: 2 }} />
                <div style={{ width: 54, height: 6.12, left: 0, top: 9.94, position: 'absolute', background: '#D1D1D1', borderRadius: 2 }} />
              </div>
            </div>
          </div>
          <nav>

            <ul data-aos="fade-down" data-aos-duration="2800" className={`Component ${isMenuVisible ? 'active' : ''}`}>
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>services</a></li>
              <li><a href="#work" className={activeSection === 'work' ? 'active' : ''} onClick={() => scrollToSection('work')}>projects</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>about</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>contact</a></li>
            </ul>
          </nav>

        </header>
      </body>
    </>
  )
}


export default Navbar