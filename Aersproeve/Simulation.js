/*
We consider each frame to be one "minute" and each pixel to be one "meter"
*/
frameRate(30);

/* Initial conditions */
var tortoiseSpeed = random(0.5, 5);
var hareSpeed = random(30, 50); 
var raceDistance = 350; 
var minsBetweenNaps = 30; 
var napLength = 20;

/* Tracking state during the race */
var tortoisePos = 20;
var harePos = 20;
var minsSinceLastNap = 0;
var minsSinceNapStart = 0;

draw = function() {

    if (tortoisePos < raceDistance && harePos < raceDistance) {
        tortoisePos += tortoiseSpeed + random(-1, 1);
        if (minsSinceLastNap <= minsBetweenNaps) {
            harePos += hareSpeed + random(-2, 2);
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
    
    // Scenery
    background(194, 160, 101);
    noStroke();
    fill(255, 247, 0);
    rect(0, 9, width, 15);
    fill(0, 0, 0);
    text("START", 181, 21);
    noStroke();
    fill(255, 247, 0);
    rect(0, 341, width, 15);
    fill(0, 0, 0);
    text("FINISH", 181, 352);
    
    // Racers
    fill(0, 255, 72);
    text("🐢", 156, tortoisePos);
    fill(0, 255, 72);
    text("🐇", 228, harePos);
};
