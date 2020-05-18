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
var aloitusviikko = 22;

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
    alert("2. luukku");
}

function luukunAvaus3 () {
    alert("3. luukku");
}

function luukunAvaus4 () {
    var newWin = open("hietsupopup.html","windowName","height=300","width=300");
}

function luukunAvaus5 () {
    alert("5. luukku");
}

function luukunAvaus6 () {
    alert("6. luukku");
}

function luukunAvaus7 () {
    alert("Mene uimaan!");
}

function luukunAvaus8 () {
    alert("8. luukku");
}

function luukunAvaus9 () {
    alert("9. luukku");
}

function luukunAvaus10 () {
    alert("10. luukku");
}

function luukunAvaus11 () {
    alert("11. luukku");
}

function luukunAvaus12 () {
    alert("12. luukku");
}

function luukunAvaus13 () {
    alert("13. luukku");
}
