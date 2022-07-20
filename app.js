const containerRaiting = document.getElementById("raiting-select");
let changeNum = document.getElementById("cambiarLetra");

const card1 = document.getElementById("div-container");
const card2 = document.getElementById("card-second");
const submitBtn = document.getElementById("btn-submit");

containerRaiting.addEventListener("click", (e) => {
  let selectNum = e.target.innerText;
  changeNum.innerText = selectNum;

  if (selectNum > 0 || selectNum <= 5) {
    submitBtn.addEventListener("click", () => {
      card1.style.display = "none";
      card2.style.display = "flex";
    });
  }
});
