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

    /*map*/

    $('#mapForm').change(function () {
        var selectedState = $('#mapForm option:selected').val();

        if (selectedState == 'ALL') {
            $('a.dot').show(1000);
        } else {
            $('a.dot[state*="' + selectedState + '"]').show(1000);
            $('a.dot[state!="' + selectedState + '"]').hide(1000);
        }
    });

    $('a.dot').click(function(){

        var city = '.city_detail#' + $(this).attr('city');
        var htmlCode = $(city).html();

        $('.detail_container').fadeOut(500, function(){
            $('.detail_container .city_detail').html(htmlCode);
            $('.detail_container').fadeIn(500);
        });
    });


});/**
 * Created by luanagoncalves on 11/19/15.
 */
