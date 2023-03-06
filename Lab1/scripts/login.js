/* 
 * File: login.js
 * Author: Jackson lyn
 * Date: 02/03/2023
 * Description: One of the javascript pages for my website
 */

$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // prevent the form from submitting
      
      // get the username input value
      var username = $('#inputUsername').val();
  
      // create the new navbar item with the username
      var navbarItem = '<li class="nav-item navbar-text">' + username + '</li>';
  
      // insert the new navbar item between the Contact Us and Login/Logout links (4th element)
      $('nav').find('.nav-item').eq(3).after(navbarItem);
    });
  });