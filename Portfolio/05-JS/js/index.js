function addition() {
    var res = 5+6;
    alert(res);
}

document.querySelector("h1").addEventListener("click",callAction);

function callAction() {
    document.getElementsByTagName("h1")[0].innerHTML = "Goodbye pals.";

    var specials = document.getElementsByClassName("special");
    for (var i=0; i<specials.length; i++) specials[i].innerHTML = "<b>Have a womderful day!</b>";

    document.getElementById("first").innerHTML = "I'm the one";

    var liELements = document.querySelectorAll(".list li");
    for (var i=0; i<liELements.length; i++) liELements[i].style.color="green";

    document.querySelector(".list #first").classList.toggle("highlight");

    document.querySelector("a").setAttribute("href", "https://www.google.com/?hl=es");
}