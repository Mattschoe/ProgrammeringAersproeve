function beregnSim() {
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    e = document.getElementById('e').value;
    d = document.getElementById('d').value;
    
    var skildpaddePos = 0;
    var harePos = 0;
    
    /*Naps*/
    var minsSinceLastNap = 0;
    var minsSinceNapStart = 0;
    
    /* Tjekker om nogle er har krydset slut ved hjælp af en Logical AND */
    while (skildpaddePos < c && harePos < c) {
        skildpaddePos += a;
        harePos += b;   
    }
    
    if (minsSinceLastNap <= e) {
        harePos + b;
        minsSinceLastNap++;
    } else {
        if (minsSinceNapStart < d) {
            minsSinceNapStart++;
            } else {
                minsSinceLastNap = 0;
                minsSinceNapStart = 0;
            }
    }
    
    
    /* Udgiver positionerne for Skildpadden og Haren*/
    document.getElementById("Skildpaddeposition").innerHTML = "Skildpaddeposition = " + +skildpaddePos + +a;
    
    document.getElementById("Hareposition").innerHTML =  "Hareposition = " + +harePos + +b;
}









