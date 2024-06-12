document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").innerHTML = "Thank you for your opinion! We gladly appreciate your feedback and we can't wait for the next chapter to drop :)";
  });
});