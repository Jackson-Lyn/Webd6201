console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
//function ValidateEmailAddressSimple(emailString) {
    //console.log('in ValidateEmailAddress');

    // check for @ sign
    //let atSymbol = emailString.indexOf('@');
  //  if(atSymbol < 1) return false;

//    let dot = emailString.indexOf('.');
 //   if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    //if (dot === emailString.length - 1) return false;

  //  return true;
//}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
//function ValidateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    //var emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

    //return true if the email address is valid - how to use regex
	//return !!emailString && typeof emailString === 'string'
		//&& emailString.match(emailRegex);
//}

function validateUserName()
{
    let username = document.getElementById
    ('usernameInput').value;
    if (username == "")
    {
        document.getElementById('usernameError').
        innerHTML = "Username cannot be empty";
        return false;
    }
    else if (username.length < 4 || username.length > 20 )
    {
        document.getElementById('usernameError')
        .innerHTML = "Username must be between 4 and 20";
        return false;
    }
    else if (username.indexOf(" ") >= 0)
    {
        document.getElementById('usernameError').
        innerHTML = "Username cannot have space";
        return false;
    }
    else
    {
        return true;
    }
}

function clearErrorMessages() {
    let errors = document.getElementsByClassName
    ('errorOut');
    for (let i = 0; i < errors.length; i++){
        errors[i].innerHTML = "";
    }
}


//TODO: check recording 1hr20
// Make all fields required DONE
// Add a pattern attribute in the telephone element (HTML)
// Ensure the password is redacted into dots on screen when typed in DONE


// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

let submitButton = document.getElementById
('submit-reg-form');
if (submitButton){
    submitButton.addEventListener('click', function (e){ 
        e.preventDefault();
        validateUserName();
    },false);
}

let resetButton = document.getElementById
('reset-reg-form');
if (resetButton){
    resetButton.addEventListener('click', function (e){
        
        clearErrorMessages();
    })
}