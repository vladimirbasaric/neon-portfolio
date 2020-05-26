// Get the container element
let navContainer = document.getElementById("navigation");

// Get all buttons with class="btn" inside the container
let btns = navContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("glow");
    current[0].className = current[0].className.replace(" glow", "");
    this.className += " glow";
  });
}

