if(Modernizr.canvas){
 //Canvas is supported
 //Code goes here to draw on the canvas

 var theCanvas = document.getElementById("Canvas1");

 //setup our context
 var ctx = theCanvas.getContext('2d');
 //Draw text in our canvas
 ctx.font = "25pt Georgia";
 ctx.fillText("Canvas Is Supported!", 20, 60);}