/*function tarkistaAika(){
    var date = new Date();
    var day = date.getDate;
    var openDate = new Date();
    openDate.set
    if (day < )

} */

function tarkistaAika() {
    var viikko = getWeekNumber(new Date());
    if (viikko > 16){
        alert("it's a corona time babe!")
    }


}

function tarkistaAika2() {
    var viikko = getWeekNumber(new Date());
    if (viikko > 18){
        alert("it's a corona time babe!")
    }


}



function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

/* Viikkonumero */
var result = getWeekNumber(new Date());
document.write(" Nyt on viikko " + result);
