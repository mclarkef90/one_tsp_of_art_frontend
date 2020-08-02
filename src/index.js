const addArtistButton= document.querySelector("#add-artist")
addArtistButton.addEventListener("click", Artist.addArtistForm)





ArtworkAdapter.fetchandMakeArtworks()
  .then(ArtistAdapter.fetchandMakeArtists)
  .then(Artist.renderAllArtists)
  .then(RandomArtworkAdapter.fetchandMakeArtworks)
  .then(Random.renderRandomSelection)
