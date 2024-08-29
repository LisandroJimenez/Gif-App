const api_key = 'SQzW3VBqCB0FAPOuDT901toXG4gnKTrH'
const categoria = 'messi'
const limit = 10
const reqGif = async() =>{
    try {
      
      const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
      const {data} = await  resp.json()
      const arreglosGifs = data.map((gif)=>({
          id : gif.id,
          url: gif.images.original.url
      }))
    } catch (err) {
      console.error
    }
  }