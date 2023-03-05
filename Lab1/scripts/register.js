$(document).ready(() => {
    // Get references to the HTML elements
    const $errorMessage = $("#ErrorMessage");
  
    // Add event listener for form submission
    $("form").submit((event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get form data
      const firstName = $("#inputFirstName").val();
      const lastName = $("#inputLastName").val();
      const email = $("#exampleInputEmail1").val();
      const password = $("#inputPassword").val();
      const confirmPassword = $("#confirmPassword").val();
  
      // Check for errors
      let hasErrors = false;
      $errorMessage.hide();
  
      if (!firstName || !lastName || firstName.length < 2 || lastName.length < 2) {
        $errorMessage.html("First and last name must be at least 2 characters.");
        $errorMessage.show();
        hasErrors = true;
      }
  
      if (!email || email.length < 8 || email.indexOf("@") === -1) {
        $errorMessage.html("Email must be at least 8 characters and contain an @ symbol.");
        $errorMessage.show();
        hasErrors = true;
      }
  
      if (!password || !confirmPassword || password !== confirmPassword || password.length < 6) {
        $errorMessage.html("Passwords must match and be at least 6 characters.");
        $errorMessage.show();
        hasErrors = true;
      }
  
      // Create new user and log to console
      if (!hasErrors) {
        const newUser = new User(firstName, lastName, email, password);
        console.log(newUser);
        $("form")[0].reset(); // Clear form
      }
      console.log(firstName)
    });
  });
  
  // User class
  class User {
    constructor(firstName, lastName, email, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    }
    
  }