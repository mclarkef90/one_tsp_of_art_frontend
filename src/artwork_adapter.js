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

}
