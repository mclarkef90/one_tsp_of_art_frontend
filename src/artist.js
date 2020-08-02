class Artist{

  static all= []
  static mainContainer= document.getElementById('main-container')

  constructor({id, name, biography, profile_image_url, artworks}){
    this.id= id
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
    this.addArtworkButton= document.createElement('button')
    this.addArtworkButton.innerText= "Add Artwork"
    this.deleteButton= document.createElement('button')
    this.deleteButton.innerText= "Delete Artist"
    let space= document.createElement('p')
    space.innerText= "===================="
    this.main.append(this.details, this.editButton, this.addArtworkButton, this.deleteButton, this.artworks, space)

    this.form= document.createElement('form')

    this.editButton.addEventListener('click', this.renderEditArtistForm)
    this.form.addEventListener('submit', this.submitEditArtistForm)

    this.addArtworkButton.addEventListener('click', this.artistNewArtwork)

    this.artworks.addEventListener('click', this.renderEditArtworkForm)

    this.deleteButton.addEventListener('button', this.deleteArtist)

    Artist.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML=`
    <img src="${this.profile_image_url}" width= "200px" length= "300px">
    <p>Name: <span>${this.name}</span>
    <p>Biography: <span>${this.biography}</span>
    `
  }

  allArtworks(){
    return Artwork.all.filter(artwork => artwork.artist.id == this.id)
  }

  renderArtworks(){
    this.artworks.innerHTML= this.allArtworks().map(artwork => artwork.renderLI(this.id)).join("<br><br>")
  }

  renderEditArtistForm = () => {
    this.editButton.disabled= true
    console.log(this);
    this.details.innerHTML= ""
    this.details.appendChild(this.form)
    this.form.innerHTML= `
    <label>Name:</label>
    <input type= "text" name="name" value="${this.name}"><br>
    <label>Image URL:</label>
    <input type= "text" name="image_url" value="${this.profile_image_url}"><br>
    <label>Biography:</label>
    <input type= "text" name="biography" value="${this.biography}"><br>
    <input id="edit-artist" type="submit" value="Submit">
    `}

  submitEditArtistForm= (e) => {
    e.preventDefault()
    console.log(e)
    this.form.querySelectorAll('input').forEach(function(input){
      input.name !== "submit" && (this[`${input.name}`] = input.value)}, this)
      this.editButton.disabled= false
      this.renderDetails()
      ArtistAdapter.editArtist(this)
  }

  artistNewArtwork= () => {
    this.addArtworkButton.disabled= true,
    console.log(this),
    Artwork.renderAddArtworkForm(this)
  }

  renderEditArtworkForm= (e) => {
    Artwork.renderEditArtworkForm(this, e)
  }

  deleteArtist = () => {

    ArtistAdapter.deleteArtist(this.id)

  }

  static renderAllArtists(){
    Artist.all.forEach((artist) => {
      artist.renderDetails()
      artist.renderArtworks()
      Artist.mainContainer.appendChild(artist.main)
    })
  }

static addArtistForm(){
    const formContainer= document.querySelector("#add-artist-form")
    formContainer.innerHTML=""
    const form= document.createElement('form')
    form.innerHTML= `

    <label>Name:</label>
    <input type= "text" id= "form-name" name="name"><br>
    <label>Image URL:</label>
    <input type= "text" id="form-profile_image_url" name="profile_image_url"><br>
    <label>Biography:</label>
    <input type= "text" id= "form-biography" name="biography"><br>
    <input id="create-artist" name="submit" type="submit" value="Submit">

    `
    formContainer.append(form)
    form.addEventListener("submit", Artist.createArtist)

  }

static createArtist(e){
    e.preventDefault()
    console.log(e)
    const name= document.querySelector("#form-name").value
    const biography= document.querySelector("#form-biography").value
    const profile_image_url= document.querySelector("#form-profile_image_url").value
    ArtistAdapter.newArtist({name, biography, profile_image_url})
  }


}
