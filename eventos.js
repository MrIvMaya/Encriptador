function showName() {
    var name = document.getElementById("name-input").value;
    document.querySelector(".welcome-text").innerHTML = name;
    document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
  }
  
    
    function checkEnter(event) {
      if (event.keyCode === 13) {
        showName();
      }
    }