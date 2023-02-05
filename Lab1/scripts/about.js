/* 
 * File: about.js
 * Author: Jackson lyn
 * Date: 02/03/2023
 * Description: One of the javascript pages for my website
 */
//insert text
document.getElementById("one").innerHTML = "My name is Jackson Lyn and I am a student athlete at durham college. "+
"I am on the rugby team which just won the OCAA championship."+
"I also like working out, playing volleyball, going to beaches and visiting cottages. ";
document.getElementById("aboutHeader").innerHTML = "About Page"; 

//image
var img = document.createElement("img");
img.src = "images/ME.JPG";
document.body.appendChild(img);
