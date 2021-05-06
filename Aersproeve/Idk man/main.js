//Harevariabler
var hareSpeed = 2;
var harePos = 0;

//Haresøvnvariabler
var minsImellemSøvn = 30;
var søvnLængde = 20;
var minsSidenSidsteSøvn = 0;
var minsSidenSøvnStart = 0;

//Skildpaddevariabler
var skildpaddeSpeed = 1;
var skildpaddePos = 0;

//Racevariabler
var raceDistance = 350;


//Racefunktion
function Race() {
    while (harePos < raceDistance && skildpaddePos < raceDistance) {
        skildpaddePos += skildpaddeSpeed;
        harePos += hareSpeed;
    }
}


//Finder hvem der har vundet
if (harePos >= raceDistance > skildpaddePos) {
    console.log("Hare vinder!")
}

//Animation
var playButton = document.querySelector('.play');

var Animation = anime({
    targets: 'img',
    translateY: -raceDistance,
    duration: hareSpeed + 50000,
    direction: 'alternate',
    autoplay: false
});

playButton.addEventListener('click', function() {Animation.play(); });