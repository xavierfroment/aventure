//items
const country = [
  {
    id: 1,
    name: "india",
    price: 90.00,
    normPrice: 120.00,
    img: "./images/p-1.jpg",
    alt: "india",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, necessitatibus."
  },
  {
    id: 2,
    name: "australia",
    price: 90.00,
    normPrice: 120.00,
    img: "./images/p-2.jpg",
    alt: "australia",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, necessitatibus."
  },
  {
    id: 3,
    name: "hawaii",
    price: 90.00,
    normPrice: 120.00,
    img: "./images/p-3.jpg",
    alt: "hawaii",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, necessitatibus."
  },
  {
    id: 4,
    name: "france",
    price: 90.00,
    normPrice: 120.00,
    img: "./images/p-4.jpg",
    alt: "france",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, necessitatibus."
  },
  {
    id: 5,
    name: "japan",
    price: 90.00,
    normPrice: 120.00,
    img: "./images/p-5.jpg",
    alt: "japan",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, necessitatibus."
  },
  {
    id: 6,
    name: "egypt",
    price: 90.00,
    normPrice: 120.00,
    img: "./images/p-6.jpg",
    alt: "egypt",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, necessitatibus."
  }
];

const packAge = document.querySelector('.pack-age');

//load items
window.addEventListener('DOMContentLoaded', function(){
  displayPackagesItems(country);
})

function displayPackagesItems(countryItems) {
  let displayPackages = countryItems.map(function(item) {
    return `<div class="box">
    <img src=${item.img} alt=${item.name}>
    <div class="content">
      <h3> <i class="fas fa-map-marker-alt"></i> ${item.name} </h3>
      <p>${item.desc}</p>
      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="price">$${item.price} <span>$${item.normPrice}</span> </div>
      <a href="#" class="btn">book now</a>
    </div>
  </div>`
  })
  displayPackages = displayPackages.join("");
  packAge.innerHTML = displayPackages;
};