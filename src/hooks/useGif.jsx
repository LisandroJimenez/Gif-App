import { useState } from 'react'
import { reqGif } from '../service/gif'


export const useGif = () => {

  const [arreglo, setArreglo] = useState([])

  const handleGif = async (categoria, e) => {
    e.preventDefault()
    await reqGif(categoria).then((arreglo) => {
      setArreglo(arreglo)
    })
  }
  return {
    handleGif,
    arreglo
  }
}
