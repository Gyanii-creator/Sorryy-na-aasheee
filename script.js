function nextMessage() {
  document.getElementById("message").innerHTML =
    "You're not just my bestie...<br>" +
    "You're my safe place, my daily laughter, my favourite human. 💕<br><br>" +
    "I messed up. But I really want to fix it.";

  document.getElementById("choices").classList.remove("hidden");
}

function forgiven() {
  document.getElementById("title").innerText = "YAYYY 😭💖";
  document.getElementById("choices").classList.add("hidden");

  const final = document.getElementById("final");
  final.classList.remove("hidden");
  final.innerHTML =
    "Thank you for forgiving me 🥹<br>" +
    "I promise to annoy you forever again.<br><br>" +
    "Besties? Always. 💞";
}

function moveNo(btn) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}
