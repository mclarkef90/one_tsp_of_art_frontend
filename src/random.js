class Random{

  static all= []
  static featureContainer= document.querySelector("#feature-container")

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

    Random.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML= `
    <h1>One Teaspoon of Art</h1>
    <img src="${this.image_url}" width= "400px" length= "600px">
    <p>Title: <span>${this.title}</span></p>
    <p>Year: <span>${this.year}</span></p>
    <p>Description: <span>${this.description}</span></p>
    <p>Artist: <span>${this.artist.name}</span></p>
    <br>
    <p>======================</p>
    <br>

    `
  }


  static renderRandomSelection(){
    Random.all.forEach((artwork) => {
      artwork.renderDetails()
      Random.featureContainer.appendChild(artwork.main)
    })
  }

}
