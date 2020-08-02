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
    <div id="artworkLi-${this.id}">
    <img src="${this.image_url}" width= "400px" length= "600px"><br>
    <h4>${this.title}, ${this.year}</h4>
    <p>${this.description}</p><br>
    <button id="${this.id}" type="submit">Edit Artwork</button>
    </div>`
}

static renderEditArtworkForm(artist, event){
  const id= parseInt(event.target.id)
  const artwork= Artwork.findById(id)
  const artworkContainer= document.getElementById("artworkLi-"+id)
  artworkContainer.innerHTML=""
  artworkContainer.innerHTML=`
  <form>
  <label>Title:</label>
  <input type= "text" name="title" value="${artwork.title}"><br>
  <label>Year:</label>
  <input type= "text" name="year" value="${artwork.year}"><br>
  <label>Image URL:</label>
  <input type= "text" name="url" value="${artwork.image_url}"><br>
  <label>Description:</label>
  <input type= "text" name="description" value="${artwork.description}"><br>
  <input type="hidden" name="id" value="${artwork.id}">
  <input type= "submit" name="submit" value="Submit">
  </form>
    `
  artworkContainer.addEventListener("submit", Artwork.submitArtworkEdit)
}

static submitArtworkEdit= (e) => {
  e.preventDefault()
  debugger
  e.srcElement.querySelectorAll('input').forEach(function(input){
     input.name !== "submit" && (this[`${input.name}`] = input.value)}, this)
  ArtworkAdapter.editArtwork(this)
}

// = () => {
//   console.log(this)
//   this.editButton.disabled= true
//


    // <label>Name:</label>
    // <input type= "text" name="name" value="${this.name}"><br>
    // <label>Image URL:</label>
    // <input type= "text" name="image_url" value="${this.profile_image_url}"><br>
    // <label>Biography:</label>
    // <input type= "text" name="biography" value="${this.biography}"><br>
    // <input id="edit-artist" type="submit" value="Submit">
    // `}


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
    input.name !== "submit" && (this[`${input.name}`] = input.value)}, this)
    // this.editButton.disabled= false

    ArtworkAdapter.createArtwork(this)
}

static findById(id) {
    return this.all.find(artwork => artwork.id === id);
  }

}
