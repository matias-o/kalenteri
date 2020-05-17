/*function tarkistaAika(){
    var date = new Date();
    var day = date.getDate;
    var openDate = new Date();
    openDate.set
    if (day < )
    
} */
/*var viikkoNumero = getWeekNumber(new Date());
var luukku1 = document.getElementById("luukku1").value;

var x = 1;
while (while) */


 //document.getElementById("luukku" + 1).innerHTML ="<img src=\"img/musta.jpg\">";
var viikko = getWeekNumber(new Date());
var aloitusviikko = 20;
for (var i = 1; i < 14; i++){
    if (aloitusviikko > viikko) {
        document.getElementById("luukku" + i).innerHTML ="<img class=\"luukku-img\"  src=\"img/musta.jpg\">";
    }
    aloitusviikko++;
}


    function tarkistaAika2() {
        var viikko = getWeekNumber(new Date());
        if (viikko > 18) {
            alert("it's a corona time babe!")
        }


    }



    function getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    }

    /* Viikkonumero */
    //var result = getWeekNumber(new Date());
