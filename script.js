// Data
const $container = document.getElementById("container")
const $descriptions = document.getElementById("descriptions")

// The beginning of each image name
let hikeimages = { 
  name: 'hikeimages_',
}

let description = []
let images = []

// Descriptions of each image
const imagedescriptions = [
  `This is a Carolina chickadee on a hand looking down at seeds.`,
  `This is a Carolina chickadee on a hand looking at the camera.`,
  `This is a Carolina chickadee on a hand looking left at seeds.`,
  `This is a Carolina chickadee on a hand looking right at seeds.`,
  `This is a Carolina chickadee holding a seed, preparing to fly away.`,
  `This is a Carolina chickadee on a hand holding a seed.`,
  `This is a Northern Cardinal on the ground looking to the left.`,
  `This is a Northern Cardinal on the ground looking to the right.`,
  `This is a Eurasian Nuthatch standing on a branch looking at the camera.`,
  `This is a Eurasian Nuthatch standing on a branch looking right.`,
  `This is a squirrel on a fallen branch.`,
  `This is a White-breasted Nuthatch on a birdhouse looking at seeds.`,
  `This is a Carolina chickadee on a hand looking left at seeds.`,
  `This is a Carolina chickadee on a hand looking away.`,
  `This is a Carolina chickadee on a birdhouse.`,]

// Get incrementally named images through loop
for (let i = 1 ; i < 16; i++ ) {
images.push(`<img src="/images/${hikeimages.name}${i}.jpg" id='${i}' width="330rem" class="imagesgallery">`)
}

// Display images
$container.innerHTML = images.join('')

// Mouseover to display image descriptions
$container.addEventListener('mouseover', function(event) {
  $descriptions.textContent = imagedescriptions[event.target.id-1];
})

// Mouseout to hide image descriptions
$container.addEventListener('mouseout', function(event) {
  $descriptions.textContent = '';
})

// Enlarge image click feature 
$container.addEventListener('click', function(event) {
  let image = event.target; 
  image.classList.toggle('imagesgallerybig');
})