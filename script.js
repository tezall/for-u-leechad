const progress = document.querySelector(".progress");
const percent = document.getElementById("percent");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const tapBtn = document.getElementById("tapBtn");
const birthday = document.getElementById("birthday");

const loadingSound = document.getElementById("loadingSound");
const completeSound = document.getElementById("completeSound");

let load = 0;

loadingSound.play();

let interval = setInterval(() => {
  load++;
  progress.style.width = load + "%";
  percent.innerText = load + "%";

  if (load >= 18) {
    clearInterval(interval);

    setTimeout(() => {
      loader.style.display = "none";
      main.classList.remove("hidden");
      completeSound.play();
    }, 1000);
  }
}, 100);

tapBtn.addEventListener("click", () => {
  birthday.classList.remove("hidden");
  launchConfetti();
});

/* CONFETTI */
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    let conf = document.createElement("div");
    conf.style.position = "absolute";
    conf.style.width = "8px";
    conf.style.height = "8px";
    conf.style.background = "crimson";
    conf.style.top = "-10px";
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.animation = "fall 3s linear forwards";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 3000);
  }
}

let style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
