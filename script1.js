// window.onload = function() {
//   alert('Page is loaded');

let logo = document.querySelector("img");
logo.addEventListener("click", showMsg);

function showMsg() {
  var inputName = prompt("What's Your Name ? ");
  console.log("user name is " + inputName);

  let input = document.querySelector("p");
  input.innerHTML =
    "Hey! " +
    inputName +
    "  Need Help! <br> Get from <br>" +
    "<span>HASHIRA</span>";

}

function setHalfVolume() {
  var audio = document.querySelector("myAudio").autoplay;
  audio.volume = 0.2;
}

// }
