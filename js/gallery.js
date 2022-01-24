//items
const photos = [
  {
    id: 1,
    img: "./images/g-1.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 2,
    img: "./images/g-2.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 3,
    img: "./images/g-3.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 4,
    img: "./images/g-4.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 5,
    img: "./images/g-5.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 6,
    img: "./images/g-6.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 7,
    img: "./images/g-7.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 8,
    img: "./images/g-8.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  },
  {
    id: 9,
    img: "./images/g-9.jpg",
    alt: "",
    name: "amazing places",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum."
  }
]

const galLery = document.querySelector('.gal-lery');

//load items
window.addEventListener('DOMContentLoaded', function(){
  diplayPhotoItems(photos);
});

function diplayPhotoItems(photoItems) {
  let displayPhotos = photoItems.map(function(item) {
    return `<div class="box">
    <img src=${item.img} alt=${item.name} >
    <div class="content">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <a href="#" class="btn">see more</a>
    </div>
  </div>`
  });
  displayPhotos = displayPhotos.join("");
  galLery.innerHTML = displayPhotos; 
};