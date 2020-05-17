//TIKO-KESÄKALENTERIN JAVASCRIPT SAMULI RAIVIO, TUOMAS YLÖNEN, MATIAS OLLANKETO

// Funktio antaa tämän hetkisen viikkonumeron
function viikkonyt(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}

//muuttuja "viikko" on aina tämän hetkisen viikon numero
var viikko = viikkonyt(new Date());

//muuttuja "aloitusviikko" on kalenterin aloitusviikon numero
var aloitusviikko = 15;

//tämä for-loop luo jokaiselle viikolle luukun viikon mukaan, joko luukku on avattavissa tai ei
for (var i = 1; i < 14; i++) {
    if (aloitusviikko < viikko) {
        document.getElementById("row").innerHTML += "<div class=\"col-lg-4\" id=\"luukku" + i + "\"><a onclick=\"luukunAvaus" + i + "()\" href=\"\"><img class=\"luukku-img\" src=\"img/kalenteriKuvaAuki.jpg\" alt=\"kukkaluukkuAuki\" ><br><p>Viikko " + i + "</p></a>";
    } else {
        document.getElementById("row").innerHTML += "<div class=\"col-lg-4\" id=\"luukku" + i + "\"><a onclick=\"luukunAvaus" + i + "()\" href=\"\"><img class=\"luukku-img\" src=\"img/kalenteriKuvaKiinni.jpg\" alt=\"kukkaluukkuKiinni\" ><br><p>Viikko " + i + "</p></a>";
    }
    aloitusviikko++;
}

//JOKAISELLE LUUKULLE ON OMA FUNKTIO
//jos luukku on "auki" luukun kuvaa voi painaa ja funktio tapahtuu
//jokaisen luukun avaamisfunktion nimi on "luukunAvaus" + luukun numero

function luukunAvaus1 () {
    alert("asd");
}

function luukunAvaus2 () {
    alert("asd");
}

function luukunAvaus3 () {
    window.open("https://www.youtube.com/watch?v=Z0yV7wz53vs");
}

function luukunAvaus4 () {
    
}

function luukunAvaus5 () {
    
}

function luukunAvaus6 () {
    
}

function luukunAvaus7 () {
    
}

function luukunAvaus8 () {
    
}

function luukunAvaus9 () {
    
}

function luukunAvaus10 () {
    
}

function luukunAvaus11 () {
    
}

function luukunAvaus12 () {
    
}

function luukunAvaus13 () {
    
}