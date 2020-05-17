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
var aloitusviikko = 1;

//tämä for-loop luo jokaiselle viikolle luukun viikon mukaan, joko luukku on avattavissa tai ei
for (var i = 1; i < 14; i++) {
    if (aloitusviikko < viikko) {
        document.getElementById("row").innerHTML += "<div class=\"col-lg-4\" id=\"luukku" + i + "\" onclick=\"luukunAvaus" + i + "()\"><img class=\"luukku-img\" src=\"img/kalenteriKuvaAuki.jpg\" alt=\"kukkaluukkuAuki\" ><br><p>Viikko " + i + "</p>";
    } else {
        document.getElementById("row").innerHTML += "<div class=\"col-lg-4\" id=\"luukku" + i + "\" onclick=\"alert('Luukkua ei voi vielä avata!')\"><img class=\"luukku-img\" src=\"img/kalenteriKuvaKiinni.jpg\" alt=\"kukkaluukkuKiinni\" ><br><p>Viikko " + i + "</p>";
    }
    aloitusviikko++;
}

//JOKAISELLE LUUKULLE ON OMA FUNKTIO
//jos luukku on "auki" luukun kuvaa voi painaa ja funktio tapahtuu
//jokaisen luukun avaamisfunktion nimi on "luukunAvaus" + luukun numero

function luukunAvaus1 () {
     window.open("https://www.youtube.com/watch?v=iCzz61uAPJ0");
}

function luukunAvaus2 () {
    alert("luukku 2 ");
}

function luukunAvaus3 () {
    window.open("https://www.youtube.com/watch?v=Z0yV7wz53vs");
}

function luukunAvaus4 () {
    var newWin = open("hietsupopup.HTML","windowName","height=300","width=300");
}

function luukunAvaus5 () {
    window.open("http://velkakello.fi/");
    alert("WAU! 5. luukusta paljastui sinunkin osuus velasta, upeaa!");
}

function luukunAvaus6 () {
    window.open("https://www.usdebtclock.org/");
    alert("6. luukusta tulikin lisää velkaa WAU!");
}

function luukunAvaus7 () {
    alert("Mene uimaan!");
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
