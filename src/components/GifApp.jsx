import {useGif} from '../hooks/useGif'

export const GifApp = () => {
  const {handleGif, arreglo} = useGif()

  return (
    <>
      <button onClick={handleGif}>Gif Aleatorio</button>
      {arreglo.map(({id, url})=>{
        return(
          <img src={url}></img>
        )
      })}
      <img key={id} src={arreglo} alt="Gif" />
    </>
  )
}
