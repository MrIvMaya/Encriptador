function showName() {
    var name = document.getElementById("name-input").value;
  document.querySelector(".welcome-text").innerHTML = name;
  document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
  if (name === "") {
    document.querySelector(".welcome-text").innerHTML = "Anonimo";
  }
  setTimeout(openPage, 2000);
}

function openPage() {
  window.location.href = "Aluraencriptor.html";
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    showName();
  }
}
