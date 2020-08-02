const addArtistButton= document.querySelector("#add-artist")
addArtistButton.addEventListener("click", Artist.addArtistForm)
const searchBar= document.querySelector("#search-container")
const clearSearch= document.querySelector("#clear-button")

searchBar.addEventListener("submit", Artist.filterArtists)

clearSearch.addEventListener("click", function(e){
  e.preventDefault();
  const searchEntry= ""
  Artist.filterForResults(searchEntry)
})





ArtworkAdapter.fetchandMakeArtworks()
  .then(ArtistAdapter.fetchandMakeArtists)
  .then(Artist.renderAllArtists)
  .then(RandomArtworkAdapter.fetchandMakeArtworks)
  .then(Random.renderRandomSelection)
