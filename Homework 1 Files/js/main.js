/*
     Name:Luana Goncalves
     Date: October 29, 2015
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

window.onload = function(){
    part1();
    part2();
    part3();
};

function part1(){
    if(Modernizr.canvas){
        //Canvas is supported
        var theCanvasRect = document.getElementById("Canvas1");
        if(theCanvasRect && theCanvasRect.getContext){
            //Get Context
            var ctxR = theCanvasRect.getContext("2d");
            if(ctxR) {
                //Draw Rectangle here
                ctxR.strokeStyle = "black";
                ctxR.fillStyle = "blue";
                ctxR.lineWidth = 3;
                ctxR.strokeRect(0,0, 50, 100);
                ctxR.fillRect(0,0, 50, 100);
            }
        }
    }else{
        //Canvas is not supported
        //Polyfill would go here
    }
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

 function part2(){
    if(Modernizr.canvas){
        //Canvas is supported
        var theCanvasCir = document.getElementById("Canvas2");
        if(theCanvasCir && theCanvasCir.getContext){
            //Get Context
            var ctxC = theCanvasCir.getContext("2d");
            if(ctxC) {
                //Draw Circle here
                ctxC.strokeStyle = "black";
                ctxC.fillStyle = "rgba(255,0,0,.5)";
                ctxC.lineWidth = 5;
                ctxC.beginPath();
                ctxC.arc(50,50,20,0,2*Math.PI, false);
                ctxC.fill();
                ctxC.beginPath();
                ctxC.arc(50,50,30,0,2*Math.PI, false);
                ctxC.stroke();

            }
        }
    }else{
        //Canvas is not supported
        //Polyfill would go here
        console.log("Not Supported");
    }
}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

function part3(){
    if(Modernizr.canvas){
        //Canvas is supported
        var theCanvasStar = document.getElementById("Canvas3");
        if(theCanvasStar && theCanvasStar.getContext){
            //Get Context
            var ctxS = theCanvasStar.getContext("2d");
            if(ctxS) {
                //Draw star here
                ctxS.strokeStyle = "black"
                ctxS.fillStyle = "yellow";
                ctxS.lineWidth = 5;
                ctxS.beginPath();

                ctxS.moveTo(100,100);
                ctxS.lineTo(140,115);
                ctxS.lineTo(100,140);
                ctxS.lineTo(111, 180);
                ctxS.lineTo(80, 160);
                ctxS.lineTo(50,180);
                ctxS.lineTo(40, 140);
                ctxS.lineTo(5, 130);
                ctxS.lineTo(50, 110);
                ctxS.lineTo(70, 75);
                ctxS.closePath();


                //ctxS.moveTo(112,40);
                //ctxS.lineTo(130.34,65.73);
                //ctxS.lineTo(161.45, 74.55);
                //ctxS.lineTo(141.67, 99.27);
                //ctxS.lineTo(142.56, 130.45);
                ////ctxS.lineTo(112, 120);
                //ctxS.lineTo(81.44, 130.45);
                //ctxS.lineTo(82.33, 99.27);
                //ctxS.lineTo(62.55, 74.55);
                //ctxS.lineTo(93.66, 65.73);
                ////ctxS.closePath();


                ctxS.stroke();

                ctxS.fill();
            }
        }
    }else{
        //Canvas is not supported
        //Polyfill would go here
        console.log("Not Supported");
    }
}
//Draw Star here


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


