class ArtistAdapter{

  static baseURL= "http://localhost:3000/api/v1/artists"

  static fetchandMakeArtists(){
    return fetch(ArtistAdapter.baseURL)
    .then(res => res.json())
    .then(function(artistArray){
      return artistArray.forEach(function(artist){
        return new Artist(artist)
      })
    })
  }
}
