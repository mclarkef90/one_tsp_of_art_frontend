class Random{

  static all= []
  static featureContainer= document.querySelector("#feature-container")

  constructor({id, title, year, image_url, description, likes, artist}){
    this.id= id
    this.title= title
    this.year= year
    this.image_url= image_url
    this.description= description
    this.artist= artist
    this.likes= likes
    this.main= document.createElement('div')
    this.main.id= `artwork-${this.id}`
    this.details= document.createElement('div')
    this.details.id= `artwork-${this.id}-details`
    this.likeButton= document.createElement('button')
    this.likeButton.innerText= "❤️"
    this.likeButton.dataset.id= this.id
    this.main.appendChild(this.details)
    this.main.appendChild(this.likeButton)

    this.likeButton.addEventListener("click", this.likeArtwork)

    Random.all.push(this)
  }

  renderDetails(){
    this.details.innerHTML= `
    
    <img src="${this.image_url}" width= "400px" length= "600px">
    <p>Title: <span>${this.title}</span></p>
    <p>Year: <span>${this.year}</span></p>
    <p id="likes">Likes: <span>${this.likes}</span></p>
    <p>Description: <span>${this.description}</span></p>
    <p>Artist: <span>${this.artist.name}</span></p>
    `
  }


  static renderRandomSelection(){
    Random.all.forEach((artwork) => {
      artwork.renderDetails()
      Random.featureContainer.appendChild(artwork.main)
    })
  }

  likeArtwork = (e) => {
    e.preventDefault
    const updateLikes = parseInt(this.likes + 1)
    const artistId= this.id
    console.log(updateLikes)
    RandomArtworkAdapter.updateLikes(artistId, updateLikes)
  }

}
