var myCanvas;
var ctx;
window.addEventListener('resize', resizeCanvas, false);
function letsStart() {
    myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");
    resizeCanvas();
    setInterval(draw,25);
}

function resizeCanvas() {
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
}

var x = 20;
var y = 20;
var dirx = 4;
var diry = 7;

function draw() {
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ctx.beginPath();
    ctx.fillStyle="#ccff33";
    ctx.arc(x,y,20,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    if (x < 20 || x > window.innerWidth - 20) {
        dirx = -dirx;
    }
    if (y < 20 || y > window.innerHeight - 20) {
        diry = -diry;
    }
    if (x > window.innerWidth) {
        x = window.innerWidth;
    }
    if (y > window.innerHeight) {
        y = window.innerHeight;
    }
    x += dirx;
    y += diry;
}


/*
function ball() {
    this.radius = Math.random() * 20 + 10;
    this.x = (Math.random() + window.innerWidth) - 100;
    this.y = (Math.random() + window.innerHeight) + 100;
    this.dirX = (Math.random() * 10);
    this.dirY = (Math.random() * 10);
    this.update = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        ctx.fillStyle = "#ccff33";
        ctx.fill();
    }
    ballCounter++;
}

var balls = [];

when a button is clicked:
    balls.push(new ball());

function makeThemMove() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
        

    }
}

/*FIBONACCI FUNCTION BELOW*/

/*var x = 1;
var y = 1;
var z = 0;

function letsStart() {
    document.getElementById("texthere").innerHTML = x;
    setInterval(fibonacci,1000);
}

function fibonacci() {
    z = x+y;
    x = y;
    y = z;
    document.getElementById("texthere").innerHTML = z;
}*/