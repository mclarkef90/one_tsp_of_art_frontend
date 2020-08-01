class Artwork{

  static all= []
  static featureContainer= document.querySelector("#feature-container")
  static newArtworkForm= document.querySelector("#add-artwork-form")

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
      Artwork.featureContainer.appendChild(artwork.main)
    })
  }


  renderLI(){
    return `
    <h4>Artworks</h4>
    <img src="${this.image_url}" width= "400px" length= "600px"><br>
    <h4>${this.title}, ${this.year}</h4>
    <p>${this.description}</p><br>
    `
  }

static renderAddArtworkForm(artist) {
  //id.addArtworkButton.disabled= true
  console.log(artist);
  const form= document.createElement('form')
  form.innerHTML= `
  <h3>Add Artwork for ${artist.name}</h3>
  <label>Title:</label>
  <input type= "text" name="title"><br>
  <label>Year:</label>
  <input type= "text" name="year"><br>
  <label>Image URL:</label>
  <input type= "text" name="image_url" ><br>
  <label>Description:</label>
  <input type= "text" name="description"><br>
  <input type="hidden" name= "artist_id" value=${artist.id}>
  <input id="add-artwork" type="submit" value="Submit">
  `
  Artwork.newArtworkForm.append(form)
  form.addEventListener("submit", Artwork.submitAddArtworkForm)
}



static submitAddArtworkForm= (e) => {
  e.preventDefault()
  console.log(e)
  Artwork.newArtworkForm.querySelectorAll('input').forEach(function(input){
    console.log(input.value)
    // input.name !== "submit" && (this[`${input.name}`] = input.value)}, this)
    // this.editButton.disabled= false
    // this.renderDetails()
    // ArtistAdapter.editArtist(this)
})
}
}
