console.log("fetch_script.js loaded");

// get the button for fetch
let btnFetch = $("#fetchJoke");

// create a url variable
let url_fetch = 'https://icanhazdadjoke.com/'

//need a header Accept value set to 'application/json'
let myFetchHeaders = {"Accept": "application/json"}

// create the callback for the click
$(btnFetch).click(() => {
    // use fetch
    fetch(url_fetch, {
        // give the necessary header data
        headers: myFetchHeaders
    })
        // first then() to recieve the promise
        .then((response) => {
             // send the json from the promise on to the next then()
            return response.json();
        }).then((jsonResponse) => {
            // console log the json
            console.log(jsonResponse['joke']);
            // set the output
            $('#output').text(jsonResponse['joke']);
        })
           
            
            
        });