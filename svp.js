// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-bottons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to make YES button grow
let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 0.2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";

    }

    yesBtn.style.transform =
        `translate(-50%, -50%) scale(${yesScale})`;
    //yesBtn.style.display = "none";
   
});

// YES is clicked
yesBtn.addEventListener("click", () => {

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    title.textContent = "Yuppiee(˶ᵔ ᵕ ᵔ˶)";

    catImg.src = "Cute.gif";

    finalText.style.display = "block";

    document.querySelector(".letter-window").classList.add("final");
});