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

google.load("visualization", "1", {packages:["corechart"]});

google.setOnLoadCallback(drawChart);

function drawChart(){

    var data = google.visualization.arrayToDataTable([
        ["Race/Ethnicity", "Drop Out Rate"],
        ["Hispanic", 134/370],
        ["Black", 124/370],
        ["White", 197/370],
        ["Asian", 19/370]
    ]);

    var chart = new google.visualization.PieChart(document.getElementById("piechart"));

    chart.draw(data);
}