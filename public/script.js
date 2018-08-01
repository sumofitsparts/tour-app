$(document).ready(function(){

function store(){
    console.log("this worked");
    var a = [document.getElementById("location").value];
    a.push(localStorage.getItem('location'));
    localStorage.setItem('location', a);

    var b = [document.getElementById("description").value];
    b.push(localStorage.getItem('description'));
    localStorage.setItem('description', b);

    var c = [document.getElementById("date").value];
    c.push(localStorage.getItem('date'));
    localStorage.setItem('date', c);

    var d = [document.getElementById("time").value];
    d.push(localStorage.getItem('time'));
    localStorage.setItem('time', d);

    var e = [document.getElementById("email").value];
    e.push(localStorage.getItem('email'));
    localStorage.setItem('email', e);

    var f = [document.getElementById("offer").value];
    f.push(localStorage.getItem('offer'));
    localStorage.setItem('offer', f);
   };

function getData(){

    var storedValueOne = localStorage.getItem("location").split(',');
    var storedValueTwo = localStorage.getItem("description").split(',');
    var storedValueThree = localStorage.getItem("date").split(',');
    var storedValueFour = localStorage.getItem("time").split(',');
    var storedValueSix = localStorage.getItem("offer").split(',');

    for (var a in storedValueOne)
    {

    $("ul").append(`<li>Location: ${storedValueOne[a]}<br>Description: ${storedValueTwo[a]}<br>Date: ${storedValueThree[a]}<br>Time: ${storedValueFour[a]}<br>Offer: $${storedValueSix}</li>`).append(`<button id='myBtn${[a]}'>Bid</button>`)

    

var btn = document.getElementById(`myBtn${[a]}`);
console.log(btn);
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById('myModal');

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    }

}

function send() {
    console.log("this works");
    var form = document.getElementById("email");
    var email = localStorage.getItem("email").split(',');

    for (var b in email)
    {
    var mailTo = `mailto:${email[b]}`;
    form.action = mailTo;
    form.submit()
    alert("message being prepared")
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    }
}

$("#logout").click(function(){
    // window.location.href = "./index.html";
    $.get("/logout", function(){
            
          });
})

function signup(){
    window.location.href = "./create.html";
}

function addUser(){
    alert("New User Added");
    window.location.href = "./index.html";
}

})