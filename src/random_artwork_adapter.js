class RandomArtworkAdapter  {

static baseURL= "http://localhost:3000/api/v1/artworks/randomThree"


static fetchandMakeArtworks(){
    return fetch(RandomArtworkAdapter.baseURL)
    .then((obj) => obj.json())
    .then(function(artworksArray){
      return artworksArray.forEach(function(artwork){
        return new Random(artwork)
      })
    })
  }

}
