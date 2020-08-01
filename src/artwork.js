class Artwork{

  static all= []
  static mainContainer= document.getElementById("#main-container")

  constructor({id, title, year, image_url, description, artist}){
    this.id= id
    this.title= title
    this.year= year
    this.image_url= image_url
    this.description= description
    this.artist= artist

    this.main= document.createElement('div')
    this.main.id= `artwork-${this.id}`
    this.details= document.createElement('div')
    this.details.id= `artwork-${this.id}-details`
    this.main.appendChild(this.details)

    Artwork.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML= `
    <img src="${this.image_url}" width= "400px" length= "600px">
    <p>Title: <span>${this.title}</span></p>
    <p>Year: <span>${this.year}</span></p>
    <p>Description: <span>${this.description}</span></p>
    <p>Artist: <span>${this.artist.name}</span></p>
    `
  }

  static renderAllArtworks(){
    Artwork.all.forEach((artwork) => {
      artwork.renderDetails()
      mainContainer.appendChild(artwork.main)
    })
  }

  renderLI(){
    return `<li>${this.title}</id>`
  }

}
