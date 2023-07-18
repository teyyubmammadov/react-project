import React, {useEffect} from 'react'
import Button from './Button'
import play from '../assets/image/play.svg'
import rightfoto from '../assets/image/rightfoto.svg'
import Typed from 'react-typed';
import AOS from "aos"

const Introduction = () => {

  useEffect(() => {
    AOS.init({
      duration : 3000
    });
  }, []);

  return (
    <div className='introduction row align-items-center'>

        <div className="introduction-left-side col-12 col-md-6" data-aos="fade-right" >
          <h6>Next genaretion platform</h6>
          <Typed className='text-white intro-h2'
                strings={[
                    'Artificial intelligence and Syber security'
                     ]}
                    typeSpeed={40}
                     >
                    
                </Typed>
        
          <p>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
          
          <div className="btn-groups">
            <Button icindekiYazi="Get started" klassAdi="btn btn-primary btn-left" />
            <Button icindekiYazi= "Watch video"  klassAdi="btn btn-primary" playIsharesi={play}/>
          </div>
        </div>

       
        <div className="introduction-right-side col-12 col-md-6">
          <img src={rightfoto} className='intro-right-foto' />
        </div>

    </div>
  )
}

export default Introduction