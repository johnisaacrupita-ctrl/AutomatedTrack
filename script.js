const popup = document.getElementById("passwordPopup");

function showPopup() {
  requestAnimationFrame(() => {
    popup.classList.add("show");
  });
}

showPopup();

const poster = document.getElementById("poster");
const passwordInput = document.getElementById("passwordInput");
const wrong = document.getElementById("wrong");
const image = document.getElementById("image");

const correctPassword = "Jhanna27"; // your password

function checkPassword() {
  const value = passwordInput.value;

  if(value !== correctPassword){
    // Wrong password → show red image with animation

    if (navigator.vibrate){
      navigator.vibrate([100,50,100]);
    }

    poster.src = "red.png";
    poster.classList.add("shake");
    wrong.style.display = "block"

    // After 2 seconds → go back to normal blue
    setTimeout(() => {
      poster.src = "AI.png";
      poster.classList.remove("shake");
      wrong.style.display = "none"
    }, 2000);
  } else {
    popup.style.display = "none"
    // proceed to next step
  }
}
