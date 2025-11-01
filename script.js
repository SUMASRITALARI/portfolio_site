const boothBtn = document.getElementById("boothBtn");
const caption = document.getElementById("caption");
const boothPic = document.getElementById("boothPic");

boothBtn.addEventListener("click", () => {
  caption.classList.toggle("hidden");
  boothPic.classList.toggle("hidden");
});

<script>
const button = document.getElementById('photoButton');
const catPhoto = document.getElementById('catPhoto');
const caption = document.getElementById('caption');

button.addEventListener('click', () => {
  catPhoto.src = 'cat.png'; // 👈 replace with your cat photo name if different
  catPhoto.style.display = 'block';
  catPhoto.classList.add('shimmer');
  caption.textContent = 'Smileeeee!!! 😸✨';
});
</script>
