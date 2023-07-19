import React from 'react'
import Introduction from '../components/Introduction'
import PartnyorCompanies from '../components/PartnyorCompanies'
import ApplySection from '../components/ApplySection'
import Mukafatlar from '../components/Mukafatlar'

const Home = () => {
  return (
    <div>
       <Introduction/> 
       <PartnyorCompanies/>
       <ApplySection/>
       <Mukafatlar/>
    </div>
  )
}

export default Home