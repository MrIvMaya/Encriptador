function showName() {
  var nameInputValue = document.getElementById("name-input").value;
  if (nameInputValue.trim() !== "") {
    localStorage.setItem("name", nameInputValue.trim());
  } if (nameInputValue.trim() === "") {
    localStorage.setItem("name", "Anonimo");
  }
  var name = localStorage.getItem("name");
  document.querySelector(".welcome-text").innerHTML = name;
  document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
  setTimeout(openPage, 2000);
}
function name() {
  var name = localStorage.getItem("name");
  document.querySelector(".Inputedname").innerHTML = "Bienvenid@ " + name + " , esta todo listo para comenzar a encriptar...";
}
function openPage() {
  window.location.href = "Aluraencriptor.html";
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    showName();
  }
}

if (window.location.href.endsWith("Aluraencriptor.html")) {
  window.onload = function() {
    name();
    encriptar();
  };
}


function encriptar() {
  let texto = document.getElementById("text-to-encode").value;
  let textoEncriptado = texto.replace(/e/g, "enter");
  textoEncriptado = textoEncriptado.replace(/i/g, "imes");
  textoEncriptado = textoEncriptado.replace(/a/g, "ai");
  textoEncriptado = textoEncriptado.replace(/o/g, "ober");
  textoEncriptado = textoEncriptado.replace(/u/g, "ufat");
  document.getElementById("resultado").innerHTML = textoEncriptado;
  if (texto === "") {
    document.getElementById("resultado").classList.add("hide");
    document.getElementById("nada").classList.remove("hide");
    document.getElementById("nadaimg").classList.remove("hide");
    document.getElementById("nada").innerHTML = "No se encontro ningun mensaje para encriptar";
  } else {
      document.getElementById("resultado").classList.remove("hide");
      document.getElementById("nada").classList.add("hide");
      document.getElementById("nadaimg").classList.add("hide");
  }
}

function desencriptar() {
  let texto = document.getElementById("text-to-encode").value;
  let textodes = texto.replace(/enter/g, "e");
  textodes = textodes.replace(/imes/g, "i");
  textodes = textodes.replace(/ai/g, "a");
  textodes = textodes.replace(/ober/g, "o");
  textodes = textodes.replace(/ufat/g, "u");
  document.getElementById("resultado").innerHTML = textodes;
  if (texto === "") {
    document.getElementById("resultado").classList.add("hide");
    document.getElementById("nada").classList.remove("hide");
    document.getElementById("nadaimg").classList.remove("hide");
    document.getElementById("nada").innerHTML = "No se encontro ningun mensaje para desencriptar";
  } else {
      document.getElementById("resultado").classList.remove("hide");
      document.getElementById("nada").classList.add("hide");
      document.getElementById("nadaimg").classList.add("hide");
  }
}

function limpiar() {
document.getElementById("text-to-encode").value = "";
document.getElementById("resultado").innerHTML = "";
document.getElementById("resultado").classList.add("hide");
document.getElementById("nada").classList.remove("hide");
document.getElementById("nadaimg").classList.remove("hide");
}

function copyToClipboard() {
  const textoACopiar = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(textoACopiar);
}