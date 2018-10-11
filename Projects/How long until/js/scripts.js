document.getElementById("submit").onclick = function () {
    var birthday = document.getElementById("birthdate").value;
    var bd = new Date(birthday);
    var bdDate = bd.getDate();   
    var bdMonth = bd.getMonth();
    var nd = new Date();
    var ndDate = nd.getDate();
    var ndMonth = nd.getMonth();
    var ndYear = nd.getFullYear();
    if (bdDate == ndDate && bdMonth == ndMonth) {
        document.getElementById("calculator_answer").innerHTML = "Today is your birthday!";
        return;
    }
    var nextBdYear = ndYear;
    if (bdMonth < ndMonth || bdMonth == ndMonth && bdDate < ndDate) {
        nextBdYear++;
    }
    var nextBd = new Date(nextBdYear, bdMonth, bdDate);
    var totalD = (nextBd.getTime() - nd.getTime()) /1000/60/60/24;
    var totalD = Math.ceil(totalD);
    document.getElementById("calculator_answer").innerHTML = "Your birthday is in " + totalD + " days!";
}

document.getElementById("link_christmas").onclick = function () {
    var cd = new Date(2000, 11, 25);
    var cdDate = cd.getDate();
    var cdMonth = cd.getMonth();
    var nd = new Date();
    var ndDate = nd.getDate();
    var ndMonth = nd.getMonth();
    var ndYear = nd.getFullYear();
    if (cdDate == ndDate && cdMonth == ndMonth) {
        alert("Today is Christmas!");
        return;
    }
    var nextCdYear = ndYear;
    if (cdMonth < ndMonth || cdMonth == ndMonth && cdDate < ndDate) {
        nextCdYear++;
    }
    var nextCd = new Date(nextCdYear, cdMonth, cdDate);
    var totalD = (nextCd.getTime() - nd.getTime()) / 1000 / 60 / 60 / 24;
    var totalD = Math.ceil(totalD);
    document.getElementById("switch_calc_answer").innerHTML = totalD + " days until Christmas!";
}

document.getElementById("link_indday").onclick = function () {
    var cd = new Date(2000, 6, 4);
    var cdDate = cd.getDate();
    var cdMonth = cd.getMonth();
    var nd = new Date();
    var ndDate = nd.getDate();
    var ndMonth = nd.getMonth();
    var ndYear = nd.getFullYear();
    if (cdDate == ndDate && cdMonth == ndMonth) {
        alert("Today is Christmas!");
        return;
    }
    var nextCdYear = ndYear;
    if (cdMonth < ndMonth || cdMonth == ndMonth && cdDate < ndDate) {
        nextCdYear++;
    }
    var nextCd = new Date(nextCdYear, cdMonth, cdDate);
    var totalD = (nextCd.getTime() - nd.getTime()) / 1000 / 60 / 60 / 24;
    var totalD = Math.ceil(totalD);
    document.getElementById("switch_calc_answer").innerHTML = totalD + " days until Independence Day!";
}