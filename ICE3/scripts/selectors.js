console.log('selectors.js loaded')

function highlight(element){
    element.css("background-color", "#fcf30040")
}

function cssSelectors(){
    $('p').css('background-color', '#2a9d8f');
}

// using classes
$('.red-box').css('background-color', '#2a9d8f');

//using ids
//$('#list').css('background-color', '#2a9d8f');

$('h1,h2').css('background-color', '#3a86ff');

$('li:even').css('background-color', 'red');


function traversingTheDOM(){
    //$('#list').find('li').css('background-color', '#3a86ff');
   // $('#list').parents('body').css('background-color', '#3a86ff');

    //direct parents
    //$('#list').parent('div').css('font-size', '20px');

    //prev & next
    $('#list').prev().css('background-color', '#3a86ff');
    $('#list').next().css('background-color', '#3a86ff');
}
function filtering(){
    // $('#list').find('li').filter(':even').css('background-color', '#3a86ff');
    //$('#list').filter(function (index){
        ///return index % 3 === 0;
   // }).css('background-color', '#219ebc')


   //highlighting
let items = $('#list').find('li');
higlight(items);
}


function addingReplacingRemoving(){
    $('ul ul:first').append($("<li> im going to be the last item. </li>"));
    $('ul ul:first').prepend($("<li> im going to be the first item. </li>"));

    $('.red-box').before("<div> class='red-box> another red box </div>");

    let text1 = "Last Night, Darth Vader came down from planet Vulcan";

    //replace the new element
    $('li').replaceWith('<li>${text1}</li>');

    //replace all
    $("<div class='green-box'> Created Green Box</div>").replaceAll(".red-box");

    // detaching
}


addingReplacingRemoving()

//traversingTheDOM();
//cssSelectors();