//Load different scripts based on our tests
//Modernzer.load

Modernizr.load({
    test: Modernizr.inputtypes.date5,
    yep:"js/success.js",
    nope: "js/fail.js",
    complete: function(){
        //This will run after the js file is loaded on the case

        console.log("The test is complete");
    }
});