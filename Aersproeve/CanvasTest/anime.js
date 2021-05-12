//Hare variabler
var hareSpeed = 10000;

//Skildpadde variabler
var skildpaddeSpeed = 20000;

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
    {translateY: -(raceDistance*0.3)},
    {translateY: -(raceDistance*0.5), delay: 3000},
    {translateY: -(raceDistance*0.75), delay: 3000},
    {translateY: -(raceDistance), delay: 1500},
  ],
  duration: hareSpeed,
}, 0)

.add({
  targets: '.myAnimationSKILDPADDE',
  translateY: -(raceDistance),
  duration: skildpaddeSpeed,
}, 0)

document.querySelector('.kontrolpanel .play').onclick = Timeline.play;
document.querySelector('.kontrolpanel .stop').onclick = Timeline.restart;
}
