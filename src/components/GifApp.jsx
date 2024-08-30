import { useState } from 'react'
import { useGif } from '../hooks/useGif'


export const GifApp = () => {
  const { handleGif, arreglo } = useGif()

  const [categoria, setCategoria] = useState('')
  return (
    <>
      <div className='container d-flex flex-row justify-content-center alig-items-center mt-3 w-50'>

        <form className='d-flex' onSubmit={(e) =>{ handleGif(categoria, e) }}>
          <input type='text' className='form-control me-2' onChange={(e)=>{setCategoria(e.target.value)}}/>
          <input type='submit' className='btn btn-outline-success' value='Buscar Gif' />
        </form>

      </div>
      <div className='d-flex flex-row justify-content-end flex-wrap gap-2 mt-4'>
        {arreglo.map(({ id, url }) => {
          return (
            <img key={id} src={url}></img>
          )
        })}
      </div>
    </>
  )
}
