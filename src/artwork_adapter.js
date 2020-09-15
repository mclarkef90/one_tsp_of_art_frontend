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

static createArtwork({title, year, description, image_url, likes, artist_id}){

    return fetch(`http://localhost:3000/api/v1/artists/${artist_id}/artworks`, {
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
          image_url,
          likes

        }
      })
    })
  .then(location.reload())
}

static editArtwork({id, title, year, description, image_url}){

    return fetch(`http://localhost:3000/api/v1/artworks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        artwork: {
          title,
          year,
          description,
          image_url,
        }
      })
    })
    .then(location.reload())
  }

static deleteArtwork(id){

      return fetch(`${ArtworkAdapter.baseURL}/${id}`, {
        method: "DELETE"})
        .then(location.reload())
    }

}
