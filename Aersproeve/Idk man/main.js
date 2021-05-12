//Hare variabler
var harePos = 0;
var hareSpeed = 10000;

//Skildpadde variabler
var skildpaddePos = 0;
var skildpaddeSpeed = 15000;

//Ekstra variabler
var raceDistance = 500; //Racelængde
var hareSøvn = 1500; //Hvor lang tid haren sover

window.onload = function() {
var Timeline = anime.timeline({
  easing: 'easeInOutSine',
  loop: false, 
  autoplay: false,
});

Timeline
.add({
  targets: '.myAnimationHARE',
  keyframes: [
    {translateY: -(raceDistance*0.5)},
    {translateY: -(raceDistance*0.5 + raceDistance*0.3), delay: 5500},
    {translateY: -(raceDistance)},
  ],
  duration: harePos += hareSpeed,
}, 0)

.add({
  targets: '.myAnimationSKILDPADDE',
  translateY: -(raceDistance),
  duration: skildpaddePos += skildpaddeSpeed,
}, 0)

document.querySelector('.kontrolpanel .play').onclick = Timeline.play;
document.querySelector('.kontrolpanel .stop').onclick = Timeline.restart;
}
