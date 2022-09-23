console.log("started...  READY TO LAUNCH IN!");

var deadline = new Date("Nov 26, 2022 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

/* abrir modal */
var modal = document.getElementById("abrirModal");
var btn = document.getElementById("inscrever");

btn.onclick = function () {
  modal.style.display = "block";
};

/* adicionar list */

var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  var inputValueName = document.getElementById("name").value;
  var inputValueEmail = document.getElementById("email").value;
  var verified = document.getElementById("verified");

  if (inputValueName === "" || inputValueEmail === "") {
    verified.innerHTML = "Você deve escrever seu nome e seu melhor email!";
  } else {
    var li = document.createElement("li");
    var t = document.createTextNode(inputValueName + ": " + inputValueEmail);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    verified.innerHTML = "Cadastrado com sucesso!";
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
