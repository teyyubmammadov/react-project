import React, {useState, useEffect} from 'react'
import PartnyorCompany from './PartnyorCompany'
// import logo1 from '../assets/image/partnyor-img/company1.svg'
// import logo2 from '../assets/image/partnyor-img/company2.svg'
// import logo3 from '../assets/image/partnyor-img/company3.svg'
// import logo4 from '../assets/image/partnyor-img/company4.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// json
import melumatlar from "../companies.json"

const PartnyorCompanies = () => {



  const [infolar,setInfolar] = useState(null)




  useEffect(()=>{
      fetch('src/companies.json')
      .then(geriyeQayidanCavab=> geriyeQayidanCavab.json())
      .then(melumatlar=>setInfolar(melumatlar))
     
  }, [])
  



  return (
    <div className='partnyorshirketler'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}

        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          525: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
       
        className="mySwiper"
      >
        {/* <SwiperSlide><PartnyorCompany shirketinLogosu={logo1}/></SwiperSlide>
        <SwiperSlide><PartnyorCompany shirketinLogosu={logo2}/></SwiperSlide>
        <SwiperSlide><PartnyorCompany shirketinLogosu={logo3}/></SwiperSlide>
        <SwiperSlide><PartnyorCompany shirketinLogosu={logo4}/></SwiperSlide> */}


        {/* <SwiperSlide><PartnyorCompany shirketinLogosu={birMelumat.company_logo}/></SwiperSlide> */}


        {
          infolar && infolar.map(info=>(
            <SwiperSlide><PartnyorCompany shirketinLogosu={info.company_logo}/></SwiperSlide> 
          ))
        }
      
      </Swiper>

      
    
    </div>
  )
}

export default PartnyorCompanies