import React from 'react'
import applyImg from "../assets/image/applyimg.svg"
import Button from './Button'

const ApplySection = () => {
  return (
    <div className="apply-section row align-items-center">
        <div className="apply-left-side col-12 col-md-6">
            <img src={applyImg} />
        </div>
        <div className="apply-right-side col-12 col-md-6">
            <h1 className='text-white pb-4'>Apply AI, Deep Learning <br/> and Data Sciece to solve</h1>
            <p className='text-white pb-3'>Lorem ipsum is placeholder text commonly used in the <br/> graphic, print, and publishing <br/> industries for previewing  layouts and visual mockups.</p>
            <Button icindekiYazi="Learn More" klassAdi="btn btn-primary" />
        </div>
    </div>
  )
}

export default ApplySection