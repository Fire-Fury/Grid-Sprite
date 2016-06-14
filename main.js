/*
+====================+
   Global Variables
+====================+
*/
var scl = 20;
var xpos = 0;
var ypos = 0;
var screen = {
    h: 400,
    w: 400,
}
var block = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
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
canvas.addEventListener("mousedown", getPosition, false);
/*
+====================+
   Various Methods
+====================+
*/
function getPosition(event){
        xpos = event.x;
        ypos = event.y;
        xpos -= canvas.offsetLeft;
        ypos -= canvas.offsetTop;      

        drawOnGrid(xpos, ypos);
}

function drawCode(){
        for(m = 0; m < 20; m++){
                for(n = 0; n < 20; n++){
                        if(block[m][n] == 1){
                             ctx.fillStyle = "#141414";
                             ctx.fillRect((n*scl),(m*scl),20,20);   
                        }
                        else{
                                ctx.fillStyle = "#FFFFFF";
                                ctx.fillRect((n*scl),(m*scl),20,20);
                        }
                }
        }        
}

function drawOnGrid(x,y){
        for(m = 0; m < 20; m++){
                for(n = 0; n < 20; n++){
                        if(x >= (n*scl) && x <= ((n+1)*scl) && y >= (m*scl) && y <= ((m+1)*scl) && block[m][n] == 0){
                                block[m][n] = 1;
                                drawCode();
                        }
                        else if(x >= (n*scl) && x <= ((n+1)*scl) && y >= (m*scl) && y <= ((m+1)*scl) && block[m][n] == 1){
                                block[m][n] = 0;
                                drawCode();
                        }
                }
        }
}

function generateCode(){
        var code = 0;
        for(m = 0; m < 20; m++){
                for(n = 0; n < 20; n++){
                        if(block[m][n] == 0){
                                code = code + "0";
                        }
                        else{
                                code = code + "1";
                        }
                }
                code = code + 2;
        }
        document.getElementById("generateCode").innerHTML = code;
}

function submitCode(){
        var input = document.getElementById("submitCode").value;
        var codey = input.split("2",20);
        var codefinal = []
        for(i = 0; i<20; i++){
                codefinal[i] = codey[i].split("",21);
        }

        codefinal[0].splice(0,1);

        for(m = 0; m < 20; m++){
                for(n = 0; n<20; n++){
                        if(codefinal[m][n] == 1){
                                block[m][n] = 1;
                        }
                        else{
                                block[m][n] = 0;
                        }
                }
        }
       drawCode();
}


/*
+====================+
        Update
+====================+
*/
function update(modifier){

}
/*
+====================+
        Render
+====================+
*/
function render(){

}
/*
+====================+
  Finalize and Start
+====================+
*/