import React, {useEffect, useState} from 'react'
import Mukafat from './Mukafat'
import axios from 'axios'

const Mukafatlar = () => {

    // depo,baza sayilir = useState
    // massivin parcalanmasi  []
    const [melumatlar,setMelumatlar] = useState(null)

    useEffect(()=>{

        axios.get('src/mukafatlar.json')
        .then(melumat=>setMelumatlar(melumat.data))

    }, [])

    // hadise getirende (api) useEffect ist olnur
    // return yuxarri prosesin getdiyi yer asagisi netice

  return (
    <div className="row mukafat-section">
        {
            melumatlar && melumatlar.map(birMukafat=>(
                <Mukafat mukafatinShekili={birMukafat.mukafatin_shekili} mukafatinAdi={birMukafat.mukafatin_adi} mukafatinTexti={birMukafat.mukafatin_metni} />
            ))
        }
    </div>
  )
}

export default Mukafatlar