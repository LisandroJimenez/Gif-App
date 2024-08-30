import { useState } from 'react'
import { useGif } from '../hooks/useGif'
import { BuscarGif } from './BuscarGif'
import { ContenedorGif } from './ContenedorGif'


export const GifApp = () => {
  const { handleGif, arreglo } = useGif()

  return (
    <>
      <BuscarGif handleGif = {handleGif}/>
      <ContenedorGif arreglo = {arreglo}/>
    </>
  )
}
