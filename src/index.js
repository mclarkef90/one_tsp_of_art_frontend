let mainContainer= document.querySelector("#main-container")

const artworkAdapter= new ArtworkAdapter("http://localhost:3000/api/v1/artworks")
const artistAdapter= new ArtistAdapter("http://localhost:3000/api/v1/artists")

artworkAdapter.fetchandMakeArtworks()

artistAdapter.fetchandMakeArtists()
  .then(Artist.renderAllArtists)
