var adviceId = document.getElementById("id");
var adviceText = document.getElementById("advice");

var btnDice = document.getElementById("dice");



btnDice.addEventListener("click", async function(e){
  var url = "https://api.adviceslip.com/advice";
  var data;
  
  adviceId.innerHTML = "#???";
  adviceText.innerHTML = "Please wait...";
  
  try {
    var res = await fetch(url);
    data = await res.json();
  } catch {
    adviceText.innerHTML = "Someting went wrong!<br>Please try again.";
    return;
  }
  
  adviceId.innerHTML = "#" + data.slip.id.toString().padStart(3,"0");
  adviceText.innerHTML = "<q>" + data.slip.advice + "</q>";
  
});

btnDice.click();

