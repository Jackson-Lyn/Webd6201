/* 
 * File: index.js
 * Author: Jackson lyn
 * Date: 02/03/2023
 * Description: One of the javascript pages for my website
 */

//insert text
document.getElementById("homeHeader").innerHTML = "Home Page";
document.getElementById("Welcome").innerHTML = "Welcome to my website, I hope you enjoy";

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

//Background image
const element = document.getElementById("body");
element.style.backgroundImage = "url('images/BG.jfif')";