$(function() { 
	//Add a click function to our button

    $('#hide').click(function() {
        $('#theDiv').hide(2000);
    });//Can use string slow, fast, normal or milliseconds

    $('#show').click(function(){
        $('#theDiv').show(2000, function(){
            $('#theDiv').css('background-color', 'red');
        });
    });

    $('#toggle').click(function(){
        $('#theDiv').toggle('slow');
    });
});


