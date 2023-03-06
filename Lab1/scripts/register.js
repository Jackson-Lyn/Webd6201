/* 
 * File: register.js
 * Author: Jackson lyn
 * Date: 02/03/2023
 * Description: One of the javascript pages for my website
 */
$(document).ready(function() {
    // create a div with id "ErrorMessage" and hide it
    var errorMessage = $('<div>').attr('id', 'ErrorMessage').hide();
    $('form').before(errorMessage);
  
    $('form').submit(function(event) {
      event.preventDefault(); // prevent the form from submitting
  
      // get the form input values
      var firstName = $('#inputFirstname').val();
      var lastName = $('#inputLastname').val();
      var email = $('#exampleInputEmail1').val();
      var password = $('#inputPassword').val();
      var confirmPassword = $('#confirmPassword').val();
  
      // validate the input values
      if (firstName.length < 2 || lastName.length < 2) {
        errorMessage.text('First and last name must be at least 2 characters long.').show();
        return;
      }
  
      if (email.length < 8 || email.indexOf('@') < 0) {
        errorMessage.text('Email address must be at least 8 characters long and contain an @ symbol.').show();
        return;
      }
  
      if (password.length < 6 || password !== confirmPassword) {
        errorMessage.text('Passwords must be at least 6 characters long and match.').show();
        return;
      }
  
      // create a new user object
      var user = new User(firstName, lastName, email, password);
  
      // log the user object to the console
      console.log(user);
  
      // clear the form inputs
      $('form')[0].reset();
    });
  });
  
  // define the User class
  class User {
    constructor(firstName, lastName, email, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    }
  }