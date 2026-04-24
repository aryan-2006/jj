let code = "";
const correct = "0401"; // <--- CHANGE YOUR PASSCODE HERE
const inputs = document.querySelectorAll(".passcode-display input");
const music = document.getElementById("bgMusic");

function press(num) {
  if (code.length < 4) {
    code += num;
    inputs[code.length - 1].value = "•";
    if (code.length === 4) setTimeout(verify, 250);
  }
}

function verify() {
  if (code === correct) {
    // 1. Shutter Flash Effect
    document.getElementById('flash').classList.add('flash-active');

    // 2. Play Audio
    music.play().catch(e => console.log("Audio block:", e));

    // 3. Reveal the Love Journey
    setTimeout(() => {
      document.getElementById("lockScreen").classList.add("hidden");
      document.getElementById("loveScreen").style.display = "block";

      // 4. Start the Instax Print Animation
      setTimeout(() => {
        document.getElementById("photoToPrint").classList.add("print-animation");
      }, 300);
    }, 300);

  } else {
    // Wrong Code - Shake Animation
    const panel = document.getElementById("passcodePanel");
    panel.classList.add("shake");
    setTimeout(() => {
      panel.classList.remove("shake");
      clearCode();
    }, 400);
  }
}

function clearCode() {
  code = "";
  inputs.forEach(i => i.value = "");
}

function showCanva() {
  const message = document.getElementById("finalMessage");
  const container = document.getElementById("canvaContainer");

  message.style.display = "none";
  container.classList.remove("hidden");

  // Smooth scroll to the design
  window.scrollTo({
    top: container.offsetTop,
    behavior: 'smooth'
  });
}