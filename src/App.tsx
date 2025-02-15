import React, { useRef } from 'react';
import './App.css';
import LoadingAnimation from './Components/LoadingAnimation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Header from './Components/Header';
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './Components/FourthSection';
import SplitType from 'split-type';
import ReactLenis from '@studio-freight/react-lenis';
import FifthSection from './Components/FifthSection';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const lenisRef: any = useRef();

  const container: any = useRef()

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.timeline({
      defaults: { duration: 1 }
    })
      .to('.circle', {
        scale: 0.3,
        delay: 0.5,
        ease: 'power1.inOut'
      })
      .to('.dee', {
        scale: 1.2,
        ease: 'power1.inOut'
      }, '<')
      .to('.circle', {
        scale: 0.5,
        ease: 'power1.inOut'
      })
      .to('.dee', {
        scale: 1,
        ease: 'power1.inOut'
      }, '<')
      .to('.circle', {
        scale: 0.2,
        ease: 'power1.inOut'
      })
      .to('.dee', {
        scale: 1.4,
        ease: 'power1.inOut'
      }, '<')
      .to('.circle', {
        scale: 1,
        ease: 'power1.inOut',
      })
      .to('.dee', {
        scale: 1,
        ease: 'power1.inOut',
      }, '<')
      .to('.loading-animation', {
        display: 'none'
      }, '<')
      .from(['.header', '.landing-description .email', '.landing-description .description .bottom'], {
        opacity: 0,
        delay: 0.5
      }, '<')
      .from('.landing-image', {
        clipPath: 'circle(0% at 50% 50%)'
      }, '<+=0.1')
      .from('.landing-description .description .top', {
        opacity: 0,
        onStart: () => {
          lenisRef.current.lenis.options.smoothWheel = true
        }
      })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.first-section',
        scrub: true,
        start: 'top top',
        end: '300% bottom',
        pin: true,
      },
      defaults: { ease: 'none' }
    })
      .to('.landing-image', {
        yPercent: -50,
      })
      .to('.header', {
        paddingTop: '1%'
      }, '<')
      .to('.landing-image img', {
        scale: 1.5,
      }, '<')
      .to('.landing-description', {
        yPercent: -20,
        opacity: 0
      }, '<')




    gsap.timeline({
      scrollTrigger: {
        trigger: '.second-section',
        pin: true,
        scrub: true,
        start: 'top top',
        end: '1200% bottom',
      },
      defaults: { ease: 'power1.in' }
    })
      .fromTo('.image-container', {
        yPercent: 150,
        scale: 1.5
      }, {
        yPercent: 0,
        scale: 1.5
      })
      .from('.image-container .image1 img', {
        yPercent: -20
      }, '<')
      .to('.image-container .image1 img', {
        scale: 1
      })
      .to('.image-container', {
        scale: 1
      }, '<+=30%')
      .to(['.one', '.nine'], {
        display: 'block'
      }, '<')
      .to(['.one'], {
        xPercent: -500
      })


      .to('.nine', {
        xPercent: -180
      }, '<+=20%')
      .to(['.one', '.nine'], {
        scale: 1.5,
        opacity: 0
      })
      .to('.image-container .image1', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
      }, '<')
      .from('.image-container .image2 img', {
        yPercent: 10
      }, '<')
      .to('.image-container .image1 img', {
        yPercent: -10
      }, '<')
      .to(['.eight', '.six'], {
        display: 'block'
      }, '<')
      .from(['.eight', '.six'], {
        opacity: 0,
        scale: 0
      }, '<')
      .to(['.image-container', '.six', '.eight'], {
        yPercent: -100,
      })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.third-section',
      },
      defaults: {
        ease: 'power1.out'
      }
    })
      .from(['.third-section'], {
        opacity: 0,
      })

    const fifthText = new SplitType('.text-above-image')


    gsap.timeline({
      scrollTrigger: {
        trigger: '.fourth-section',
        start: 'top top',
        end: '1800% bottom',
        scrub: true,
        pin: true
      },
      defaults: {
        duration: 1
      }
    })
      .from('.round-div', {
        borderTopRightRadius: 1000,
        duration: 4,
        yPercent: 100,
        xPercent: -100
      })
      .from('.right-circle', {
        scale: 0,
        duration: 4
      })
      .from('.left-text', {
        opacity: 0,
        duration: 4
      }, '<')
      .to('.left-text p', {
        yPercent: -80,
        duration: 7
      })
      .to('.left-text p', {
        opacity: 0
      })
      .to('.right-circle', {
        xPercent: -165,
        duration: 2,
      })
      .to('.round-div', {
        borderTopRightRadius: 0,
        height: '100%'
      })
      .to(['.header'], {
        color: 'rgb(255, 246, 234)'
      }, '<')
      .to('.dee-header', {
        backgroundColor: 'rgb(255, 246, 234)'
      }, '<')
      .to('.circle-header', {
        backgroundColor: 'rgb(37, 35, 35)'
      }, '<')

      .to('.right-circle', {
        yPercent: -120,
        duration: 3
      }, '<+=50%')
      .from('.fourth-section img', {
        yPercent: 100,
        scale: 0.5,
        duration: 3
      }, '<+=50%')
      .from(fifthText.words, {
        yPercent: 100,
        duration: 3
      }, '<+=50%')


    gsap.timeline({
      scrollTrigger: {
        trigger: '.fifth-section',
        scrub: true,
        start: 'top center',
        end: 'bottom bottom'
      }
    })
      // .to('.header', {
      //   yPercent: -100
      // }, '+=120%')
      .from(['.d', '.e', '.f'], {
        yPercent: 50,
        stagger: 0.2
      })

    gsap.to('.header', {
      scrollTrigger: {
        trigger: '.fifth-section',
        scrub: true,
      },
      yPercent: -120
    })

  }, { scope: container })

  
  return (
    <ReactLenis root ref={lenisRef} options={{
      smoothWheel: false
    }}>
      <div ref={container} className="App">
        <Header />
        <LoadingAnimation />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        {/* <div className="mouse"></div> */}
      </div>
    </ReactLenis>
  );
}

export default App;
