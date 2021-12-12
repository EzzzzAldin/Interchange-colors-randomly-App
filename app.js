const btn = document.getElementById("change-color");
const codeColor = document.querySelector("span");
const mainSection = document.getElementById("main-section");

btn.addEventListener("click", () => {
  // Get Color code
  let color = "#";
  // Get Hex Number
  color += Math.random().toString(16).slice(2, 8);
  // Set Style of Elements
  mainSection.style.backgroundColor = color;
  codeColor.innerText = color;
  codeColor.style.color = color;
});
