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
    var img = document.getElementById("Skildpadde.png");
    ctx.drawImage(img, 10, 10);
};
/*Canvas pictures*/


