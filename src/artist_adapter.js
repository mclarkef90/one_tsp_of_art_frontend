class ArtistAdapter{

  constructor(url){
    this.baseURL= url
  }

  fetchandMakeArtists(){
    return fetch(this.baseURL)
    .then(res => res.json())
    .then(function(artistArray){
      return artistArray.forEach(function(artist){
        return new Artist(artist)
      })
    })
  }
}
