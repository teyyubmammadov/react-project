import React from 'react'

const Mukafat = ({ mukafatinShekili, mukafatinAdi, mukafatinTexti }) => {
  return (


    <div className="card mukafat-karti col-12 col-md-6 col-lg-2 text-white">
      <img src={mukafatinShekili} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{mukafatinAdi} </h5>
        <p className="card-text">{mukafatinTexti} </p>
      </div>
    </div>

  )
}

export default Mukafat