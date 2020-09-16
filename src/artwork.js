class Artwork{

  static all= []
  static featureContainer= document.querySelector("#feature-container")
  static newArtworkForm= document.querySelector("#add-artwork-form")

  constructor({id, title, year, image_url, description, likes, artist}){
    this.id= id
    this.title= title
    this.year= year
    this.image_url= image_url
    this.description= description
    this.likes= likes
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
    <br>
    <div id="artworkLi-${this.id}">
    <img src="${this.image_url}" width= "400px" length= "600px"><br>
    <h4>${this.title}, ${this.year}</h4>
    <p>Likes: ${this.likes}</p>
    <p>${this.description}</p>
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
  <h2> Edit Artwork </h2>
  <label>Title:</label>
  <input type= "text" name="title" value="${artwork.title}"><br>
  <label>Year:</label>
  <input type= "text" name="year" value="${artwork.year}"><br>
  <label>Image URL:</label>
  <input type= "text" name="image_url" value="${artwork.image_url}"><br>
  <label>Description:</label>
  <input type= "text" name="description" value="${artwork.description}"><br>
  <input type="hidden" name="id" value="${artwork.id}">
  <input type= "submit" id= "submitB" name="submit" value="Submit">
  </form>
  `
    const deleteB= document.createElement('button')
    deleteB.innerText= "Delete"
    deleteB.type= "button"
    deleteB.id= "deleteB"
    deleteB.dataset.id= id
    artworkContainer.append(deleteB)


  artworkContainer.addEventListener("submit", Artwork.submitArtworkEdit)
  document.querySelector("#deleteB").addEventListener("click", Artwork.delete)

}

static submitArtworkEdit= (e) => {
  e.preventDefault()
  e.srcElement.querySelectorAll('input').forEach(function(input){
     input.name !== "submit" && (this[`${input.name}`] = input.value)}, this)
  ArtworkAdapter.editArtwork(this)

  // const id= parseInt(this.id)
  // const artwork= Artwork.findById(id)
  // const artworkContainer= document.getElementById("artworkLi-"+id)
  // artworkContainer.innerHTML=`
  // <br>
  // <div id="artworkLi-${this.id}">
  // <img src="${this.image_url}" width= "400px" length= "600px"><br>
  // <h4>${this.title}, ${this.year}</h4>
  // <p>Likes: ${artwork.likes}</p>
  // <p>${this.description}</p>
  // <button id="${this.id}" type="submit">Edit Artwork</button>
  // </div>
  // `
  }


static renderAddArtworkForm(artist) {
  //id.addArtworkButton.disabled= true
  console.log(artist);
  const form= document.createElement('form')
  form.innerHTML= `
  <br>
  <div class="card-body">
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
  <input type="hidden" name= "likes" value= 0>
  <input id="add-artwork" type="submit" value="Submit">
  <input id="cancel-artwork" name="cancel" type="button" value="Cancel">
  <div>

  `
  Artwork.newArtworkForm.append(form)
  form.addEventListener("submit", Artwork.submitAddArtworkForm)
}

static submitAddArtworkForm= (e) => {
  e.preventDefault()
  console.log(e)
  Artwork.newArtworkForm.querySelectorAll('input').forEach(function(input){
    input.name !== "submit" && (this[`${input.name}`] = input.value)}, this)
    ArtworkAdapter.createArtwork(this)
}

static findById(id) {
    return this.all.find(artwork => artwork.id === id);
  }

static delete (e){
  const id= e.target.dataset.id
  console.log(this.id)
  ArtworkAdapter.deleteArtwork(id)
  }

}
