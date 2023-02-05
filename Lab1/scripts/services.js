/* 
 * File: services.js
 * Author: Jackson lyn
 * Date: 02/03/2023
 * Description: One of the javascript pages for my website
 */

//insert text
document.getElementById("one").innerHTML = "One service I offer is strong C++ program development. "+
"I am also experienced in creating programs utilizing MVC in c#. i have created programs for both my own recreational use and school assignments "+
"Aside from the 2 languages listed above, i also have some experience working in python, sql, and various web development languages. ";
document.getElementById("servicesHeader").innerHTML = "Services Page"; 

// image
var img = document.createElement("img");
img.src = "images/CPP.jfif";
document.body.appendChild(img);

// Create a new link element
let resumeLink = document.createElement("a");

// Set the link's href attribute to the URL of the resume
resumeLink.href = "https://www.linkedin.com/in/jackson-j-76b638253/";

// Set the link's text content
resumeLink.textContent = "My Resume";

// Set the link's target attribute to "_blank" to open the link in a new tab
resumeLink.target = "_blank";

// Append the link to the desired parent element
document.body.appendChild(resumeLink);