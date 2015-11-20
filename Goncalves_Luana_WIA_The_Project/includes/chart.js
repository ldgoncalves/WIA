/**
 * Created by luanagoncalves on 11/19/15.
 */

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