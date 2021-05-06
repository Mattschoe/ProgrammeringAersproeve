//Hare
var hareSpeed = 2;
var harePos = 0 + hareSpeed;

//Haresøvn
var minsImellemSøvn = 30;
var søvnLængde = 20;
var minsSidenSidsteSøvn = 0;
var minsSidenSøvnStart = 0;

//Skildpadde
var skildpaddeSpeed = 1;
var skildpaddePos = 0;

//Race
var raceDistance = 250;

//Haresøvn 
while (skildpaddePos < raceDistance && harePos < raceDistance) {
    skildpaddePos += skildpaddeSpeed;
    if (minsSidenSidsteSøvn <= minsImellemSøvn) {
        harePos += hareSpeed;
        minsSidenSidsteSøvn++;
    } else {
         if (minsSidenSøvnStart < søvnLængde) {
              minsSidenSøvnStart++;
          } else {
              minsSidenSidsteSøvn = 0;
              minsSidenSøvnStart = 0;
          }
    }
}

anime({
    targets: 'img',
    translateY: raceDistance,
    duration: hareSpeed,
    delay: 500,
    direction: 'alternate',
    loop: true
});

console.log("Hareposition = " + harePos);
console.log("Skildpaddeposition = " + skildpaddePos);