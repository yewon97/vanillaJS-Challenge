let generateNum = document.getElementById("generateNum");
let chooseNum = document.getElementById("chooseNum");
let playBtn = document.getElementById("playBtn");
let resultMsg = document.querySelector(".resultMsg");

playBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let defaultNum = parseInt(generateNum.value);
  let chosen = parseInt(chooseNum.value);
  const randomNum = Math.ceil(Math.random()*defaultNum);

  if(chosen >= 0 && chosen <= defaultNum) {
    resultMsg.innerHTML = `<span>You chose ${chosen}, the machine chose: ${randomNum}.</span><br> <strong>${chosen === randomNum ? "You win!" : "You lose!"}</strong>`;
  } else {
    alert(`You can only choose 0~${defaultNum} numbers`);
    return;
  }
});
