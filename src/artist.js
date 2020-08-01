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
    let space= document.createElement('p')
    space.innerText= "===================="
    this.main.append(this.details, this.editButton, this.artworks, space)

    this.form= document.createElement('form')

    this.editButton.addEventListener('click', this.renderEditArtistForm)
    this.form.addEventListener('submit', this.submitEditArtistForm)
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
    this.artworks.innerHTML= this.allArtworks().map(artwork => artwork.renderLI()).join("")
  }

  renderLI(){
    return `<li>${this.name}</li>`
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

  static renderAllArtists(){
    Artist.all.forEach((artist) => {
      artist.renderDetails()
      artist.renderArtworks()
      Artist.mainContainer.appendChild(artist.main)
    })
  }


}
