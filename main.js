/*
+====================+
   Global Variables
+====================+
*/
var screen = {
    h: 400,
    w: 400,
}
/*
+====================+
   Canvas Creation
+====================+
*/

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
div = document.getElementById("leftSide");
canvas.id = "canvas";
canvas.height = screen.h;
canvas.width = screen.w;
canvas.style.border = "4px solid #000";
canvas.style.background = "#FFFFFF";
canvas.style.margin = "21px";
div.appendChild(canvas);

ctx.fillStyle = "#000000";
ctx.fillRect(10,10,50,50);

/*
+====================+
   Various Methods
+====================+
*/
/*
+====================+
        Update
+====================+
*/
/*
+====================+
        Render
+====================+
*/
/*
+====================+
  Finalize and Start
+====================+
*/