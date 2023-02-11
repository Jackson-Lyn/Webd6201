/* 
 * File: app.js
 * Author: Jackson lyn
 * Date: 02/03/2023
 * Description: One of the javascript pages for my website (contacts page)
 */

// test js
console.log("JS Script set up")

// timed redirect with 
function timedRedirect(e){
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    console.log("Email: " + contactEmail + "Password: " + contactPassword);
    e.preventDefault();
    setTimeout(function (){
        window.location.href = "index.html"
    }
    ,3000)
    

}
// submit button functionality
let submitButton = document.getElementById('submit-button');
if (submitButton){
    submitButton.addEventListener('click',timedRedirect, false)
}





