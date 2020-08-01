class ArtworkAdapter  {
  constructor(url){
    this.baseURL= url
  }

  fetchandMakeArtworks(){
    return fetch(this.baseURL)
    .then((obj) => obj.json())
    .then(function(artworksArray){
      return artworksArray.forEach(function(artwork){
        return new Artwork(artwork)
      })
    })
  }

}
