/**
 * Created by luanagoncalves on 11/19/15.
 */

$(function(){

    /* Dropdown effect */

    $('ul.parent > li').hover(function(){
        $(this).find('ul.child').show(200);
    }, function(){
        $(this).find('ul.child').hide(200);
    });

    $('ul.child > li').hover(function(){
        $(this).find('ul.sibling').show(200);
    }, function(){
        $(this).find('ul.sibling').hide(200);
    });

});

/*audio*/
var audio;

window.onload = function(){
    audio=document.getElementById('audio');
    audio.volume=0.1;
};
