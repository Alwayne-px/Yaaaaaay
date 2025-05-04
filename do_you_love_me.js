const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector("#gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const resultMessage = document.querySelector("#result-message");

function handleAnswerClick(answer) {
  questionContainer.style.display = "none";
  heartLoader.style.display = "flex";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";

    if (answer === "yes") {
      resultMessage.innerHTML =
        "Hala totoo ba ito?🤭 di nako makatulog nito BWHAHAHAHAHAHA. Yaaaay! I love youuuuu💘";
      gifResult.src =
        "https://media.giphy.com/media/Vr115pWzOnMtO/giphy.gif?cid=ecf05e47lkq6ho41rd03fg851gj4v8xykgz0gmtob2y1neut&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    } else {
      resultMessage.innerHTML =
        "Why? bakit? pourquoi? なぜ? ngano? charizz oa na oa hehe💙. Hmmmm pero, what if subukan natin? O wag na what if, susugal ako ulit. Kung di mag-work, at least sinubukan natin, diba? Kung hindi talaga, hindi ako papayag, papatulfo kita!😏 HAHAHA. I will ask once again: Will you be my girlfriend?";
      gifResult.src =
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg5aWc3dWM1Zm5oNzZyamlob2g0djU0emZxcjkzdnkzcTZyNzJ2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2aw9gwZlltbdX92b4w/giphy.gif";
    }

    gifResult.play?.();
  }, 3000);
}

yesBtn.addEventListener("click", () => handleAnswerClick("yes"));
noBtn.addEventListener("click", () => handleAnswerClick("no"));
