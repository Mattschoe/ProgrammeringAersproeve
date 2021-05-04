/* Skilpadde variables */
var skildpadde = new Image();
var tortoiseSpeed = 1;
var tortoisePos = 0;
/* Skilpadde variables */

/* Hare variables */
var hare = new Image();
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

function init() {
    hare.src = 'Hare.png'
    skildpadde.src = 'Skildpadde.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300);

    //Hare
    ctx.drawImage(hare, 60, 110, 40, 40);



    //Skildpaddde
    ctx.drawImage(skildpadde, 180, 110, 40, 40);




    window.requestAnimationFrame(draw);
}

function win() {

}

init();
