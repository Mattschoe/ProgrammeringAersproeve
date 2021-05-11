//Harevariabler
var hareSpeed = 2;
var harePos = 0;

//Skildpaddevariabler
var skildpaddeSpeed = 1;
var skildpaddePos = 0;

//Racevariabler
var raceDistance = 350;

var hareSøvn = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]

//Racefunktion
var text = "";
for (harepos = 0; harepos <= raceDistance; harepos++) {
    if (harepos == hareSøvn[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) { continue; }
    text += "Haren er " + harepos + " langt inde i løbet" + <br>;
    console.log(text);
}

//Finder hvem der har vundet
if (harePos >= raceDistance > skildpaddePos) {
    console.log("Hare vinder!")
}

window.onload = function() {
var Animation = anime({
    targets: '.RaceBackground img',
    translateY: -raceDistance,
    duration: harePos * 100,
    direction: 'alternate',
    autoplay: false,
    loop: false,
});

document.querySelector('.kontrolpanel .play').onclick = Animation.play;
document.querySelector('.kontrolpanel .stop').onclick = Animation.restart;
}
