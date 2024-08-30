const api_key = 'MWx3SI7S6qkmjw3B1OGIgMY3nPaVFFQj'
const limit = 10
export const reqGif = async(categoria) =>{
    try {
      
      const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
      const {data} = await  resp.json()
      const arreglosGifs = data.map((gif)=>({
          id : gif.id,
          url: gif.images.original.url
      }))
      console.log(data)
      return arreglosGifs
    } catch (err) {
      console.error
    }
  }