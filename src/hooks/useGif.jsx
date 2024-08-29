import { useState } from 'react'
import { reqGif } from '../service/gif'


export const useGif = () => {
    const [arreglo, setArreglo] = useState([])
    const handleGif = async() =>{
        await reqGif().then((arreglo)=> {
          setArreglo(arreglo)
      })
    }
  return{
    handleGif,arreglo
    }
}
