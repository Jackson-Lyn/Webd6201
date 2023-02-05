/* 
 * File: products.js
 * Author: Jackson lyn
 * Date: 02/03/2023
 * Description: One of the javascript pages for my website
 */
// for the body
document.getElementById("one").innerHTML = "I dont really watch TV anymore but my favourite show from the past is Game of Thrones."+
"My music taste is all over the place, but one of my favourite song is for good vibes is Despacito"+
"Another form of media i enjoy is anime. My favourite anime is called Naruto and i have watched it since i was in kindergarten";
document.getElementById("productsHeader").innerHTML = "Products Page"; 

// for the header
document.getElementById("products").innerHTML = "Interests";

// Select the Navbar
let navbar = document.querySelector('.navbar-nav');

// Create a new list item
let newItem = document.createElement('li');
newItem.classList.add('nav-item');

// Create a new link
let newLink = document.createElement('a');
newLink.classList.add('nav-link');
newLink.setAttribute('href', '#');
newLink.innerHTML = "Human Resources <i class='fas fa-users'></i>";

// Append the link to the list item
newItem.appendChild(newLink);

// Find the "About Us" list item
let aboutUsItem = document.querySelector('.nav-item:nth-child(5)');

// Insert the new list item before the "About Us" item
navbar.insertBefore(newItem, aboutUsItem);

// get the date
var currentDate = new Date();
var year = currentDate.getFullYear();

// create the nav
var bottomNav = document.createElement("nav");
bottomNav.className = "navbar navbar-light bg-light fixed-bottom";

//copyright symbol
var copyright = document.createElement("span");
copyright.textContent = "Copyright \u00A9 " + year + " Jackson";
bottomNav.appendChild(copyright);
document.body.appendChild(bottomNav);

// image
var img = document.createElement("img");
img.src = "images/GOT.jfif";
document.body.appendChild(img);