$(document).ready(() => {
    // Get references to the HTML elements
    const $navbarText = $(".navbar-nav");
  
    // Add event listener for form submission
    $("form").submit((event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      const username = $("#inputUsername").val();
      const password = $("#inputPassword").val();
  
      // Validate username and password
      if (username === "admin" && password === "password") {
        // Insert username into the navbar
        $navbarText.html(`Contact Us | ${username} | <a href="#">Logout</a>`);
      } else {
        // Show error message
        alert("Invalid username or password.");
      }
    });
  });