function fadeInOutTo(){
    //fade out
    $('.red-box').fadeOut(3000);

    //fade in
    $('.red-box').fadeIn(1500);

    //fade to 
    $('.green-box').fadeTo(2000, .3);

    //fade to 
    //fade to 
    $('.blue-box').fadeTo(1000, .5);

    //fade to 
    $('.blue-box').fadeToggle();
    $('.blue-box').fadeToggle();

}

function hideElement(){
    $('.red-box').hide(2000)
    $('.red-box').show(1000)
    $('.red-box').slideUp(1000)
    $('.red-box').slideDown(1000)
    $('.red-box').slideToggle(1000)
}
function chainAnimations(){
    $('.red-box').fadeTo(1000, .5);
    $('.green-box').delay(1000).fadeTo(1000, .5);

}

chainAnimations();
//hideElement();
//fadeInOutTo();