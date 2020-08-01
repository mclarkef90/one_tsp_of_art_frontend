class ArtworkAdapter  {

static baseURL= "http://localhost:3000/api/v1/artworks"


static fetchandMakeArtworks(){

    return fetch(ArtworkAdapter.baseURL)
    .then((obj) => obj.json())
    .then(function(artworksArray){
      return artworksArray.forEach(function(artwork){
        return new Artwork(artwork)
      })
    })
  }

static createArtwork({title, year, description, image_url, artist_id}){
    return fetch(`${ArtistAdapter.baseURL}/${artist_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        artwork: {
          title,
          year,
          description,
          image_url
        }
      })
    })
  }

}