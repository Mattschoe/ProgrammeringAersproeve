var hareSpeed = 10000; //Harens hastighed (ms)
var skildpaddeSpeed = 20000; //Skildpaddens hastighed (ms)

//Ekstra variabler
var raceDistance = 500; //Racelængde
var hareSøvn = 3000; //Hvor lang tid haren sover (ms)

window.onload = function() { //window.onload sikrer at HTML dokumenterne loader først ind ved at først loade function() ind når browseren når til den
var Timeline = anime.timeline({ //Opretter en variable ud fra en animejs tidslinje
  easing: 'easeInOutSine', //Definerer hvilken form for easing der skal bruges i animationstidslinjen (Eksempler på easing: https://codepen.io/kcjpop/pen/GvdQdX)
  loop: false, //Sørger for at simulationen ikke bare kører i et konstant loop
  autoplay: false, //Sørger for at simulationen ikke starter så snart den er loaded ind, men kun ved knap tryk
});

Timeline //Vi tilføjer nu elementer til vores tidslinje
/* HARE */
.add({
  targets: '.myAnimationHARE', //Vi har givet harebilledet i HTML class'en ".myAnimationHARE", denne class referer vi nu til at skulle blive brugt i animationen
  keyframes: [ //Starter en samling af animationerne i en "keyframe", det vil sige at de spiller en animation efter hinanden
    {translateY: -(raceDistance*0.3)},
    {translateY: -(raceDistance*0.5), delay: hareSøvn},
    {translateY: -(raceDistance*0.75), delay: hareSøvn},
    {translateY: -(raceDistance), delay: hareSøvn/2},
  ], //Vi deler længdet af racet op i 3 dele (30% inde, 50% inde, og 75%) hvor haren tager en lur imellem alle dele
  duration: hareSpeed, //Hvor lang tid animation skal tage sted, dette er bestemt af harens hastighed (som er 10000)
}, 0)
/* HARE */

/* SKILDPADDE */
.add({
  targets: '.myAnimationSKILDPADDE', //Vi har givet skildpaddebilledet i HTML class'en ".myAnimationSKILDPADDE", denne class referer vi nu til at skulle blive brugt i animationen
  translateY: -(raceDistance), //Siden skildpadden bevæger sig linært så har vi ikke brug for at keyframe dets animationer
  duration: skildpaddeSpeed, //Hvor lang tid animation skal tage sted, dette er bestemt af harens hastighed (som er 20000)
}, 0)
/* SKILDPADDE */

/*Vi får nu JavaScript til at lede efter kontrolpanelet (som er under en class under <div>) i vores HTML fil og herefter finder enten .play eller .stop som er to forskellige buttons med to forskellige class's til enten at starte Timeline variablen eller restarte den */
document.querySelector('.kontrolpanel .play').onclick = Timeline.play; 
document.querySelector('.kontrolpanel .stop').onclick = Timeline.restart;
}

