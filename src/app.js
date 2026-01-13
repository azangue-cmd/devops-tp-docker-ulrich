function updateTimestamp() {
  const now = new Date();
  document.getElementById("timestamp").textContent =
    now.toLocaleString("fr-FR");
}

function generateContainerId() {
  const chars = "0123456789abcdef";
  let id = "";
  for (let i = 0; i < 12; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function testContainer() {
  const resultBox = document.getElementById("result");
  resultBox.className = "result-box success";
  resultBox.innerHTML = "✅ Container fonctionnel !";
}

document.addEventListener("DOMContentLoaded", function () {
  updateTimestamp();
  setInterval(updateTimestamp, 1000);
  document.getElementById("container-id").textContent = generateContainerId();
  document.getElementById("status").textContent = "Container opérationnel";
});
