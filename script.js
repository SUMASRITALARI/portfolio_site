const boothBtn = document.getElementById("boothBtn");
const caption = document.getElementById("caption");
const boothPic = document.getElementById("boothPic");

boothBtn.addEventListener("click", () => {
  caption.classList.toggle("hidden");
  boothPic.classList.toggle("hidden");
});
