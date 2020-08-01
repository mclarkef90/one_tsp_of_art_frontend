class Artist{

  static all= []
  static mainContainer= document.getElementById('main-container')

  constructor({name, biography, profile_image_url, artworks}){
    this.name= name
    this.biography= biography
    this.profile_image_url= profile_image_url
    this.artworks= artworks


    this.main = document.createElement('div')
    this.main.id= `artist-${this.id}`
    this.details= document.createElement('div')
    this.details.id= `artist-${this.id}-details`
    this.artworks= document.createElement('div')
    this.artworks.id= `artist-${this.id}-artworks`
    this.editButton= document.createElement('button')
    this.editButton.innerText= "Edit Artist"
    let space= document.createElement('p')
    space.innerText= "===================="
    this.main.append(this.details, this.artworks, this.editButton, space)
    Artist.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML=`
    <img src="${this.profile_image_url}" width= "200px" length= "300px">
    <p>Name: <span>${this.name}</span>
    <p>Biography: <span>${this.biography}</span>
    <p>Artworks: <span>${this.artworks}</span></p>
    `
  }

  allArtworks(){
    return Artwork.all.filter(artwork => artwork.artistId == this.id)
  }

  renderArtworks(){
    this.artworks.innerHTML= this.allArtworks().map(artwork => artwork.renderLI()).join(" | ")
  }

  renderLI(){
    return `<li>${this.name}</id>`
  }

  static renderAllArtists(){
    Artist.all.forEach((artist) => {
      artist.renderDetails()
      artist.renderArtworks()
      Artist.mainContainer.appendChild(artist.main)
    })
  }


}
