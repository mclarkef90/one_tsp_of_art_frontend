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

static updateLikes(id, updateLikes){
  fetch(`http://localhost:3000/api/v1/artworks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
      body: JSON.stringify({
        likes: updateLikes,})
      })
    .then(res => res.json())
    .then(
      document.getElementById("feature-container").querySelector("#likes").innerHTML= `Likes: ${updateLikes}`
    )}

}
