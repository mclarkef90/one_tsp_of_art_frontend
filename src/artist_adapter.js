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

  static editArtist({id, name, biography, profile_image_url}){
    return fetch(`${ArtistAdapter.baseURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        artist: {
          name,
          biography,
          profile_image_url
        }
      })
    })
  }

static newArtist({name, biography, profile_image_url}){
  debugger
    return fetch(`${ArtistAdapter.baseURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        artist: {
          name,
          biography,
          profile_image_url
        }
      })
    })
  }
}
