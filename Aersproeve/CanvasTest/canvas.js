/* Skilpadde variables */
var tortoiseSpeed = 1;
var tortoisePos = 0;
/* Skilpadde variables */

/* Hare variables */
var hareSpeed = 2;
var harePos = 0;
/* Søvn variables */
var minsBetweenNaps = 30;
var napLength = 20;
var minsSinceLastNap = 0;
var minsSinceNapStart = 0;
/* Søvn variables */
/* Hare variables */

/* Generic variables*/
var raceDistance = 350;
/* Generic variables*/

/* Haresøvn*/
while (tortoisePos < raceDistance && harePos < raceDistance) {
    tortoisePos += tortoiseSpeed;
    if (minsSinceLastNap <= minsBetweenNaps) {
        harePos += hareSpeed;
        minsSinceLastNap++;
    } else {
        if (minsSinceNapStart < napLength) {
            minsSinceNapStart++;
        } else {
            minsSinceLastNap = 0;
            minsSinceNapStart = 0;
        }
    }
}

/* Haresøvn*/
console.log('Tortoise position: ' + tortoisePos);
console.log('Hare position: ' + harePos);

/*Canvas pictures*/
window.onload = function () {
    var canvas = document.getElementById("viewport");
    var ctx = canvas.getContext("2d");
    var SkildpaddeImg = document.getElementById("Skildpadde.png");
}

window.onload = function () {
    var canvas = document.getElementById("viewport");
    var ctx = canvas.getContext("2d");
    var HareImg = document.getElementById("Hare.png")
}
/*Canvas pictures*/


var x = 200;
var dx = 1;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    c.beginPath();
    c.arc(x,200, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    
    x += dx;
}

animate();