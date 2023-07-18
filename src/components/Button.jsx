// rafce
import React from 'react'
import playIsharesi from '../assets/image/play.svg'

const Button = ({klassAdi, playIsharesi, icindekiYazi}) => {
  return (
    <button className={klassAdi}> {playIsharesi && <img className='playimg' src={playIsharesi} />} {icindekiYazi} </button>
  )
}

export default Button