function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.className === "link") {
      x.className += " responsive";
    } else {
      x.className = "link";
    }
  }