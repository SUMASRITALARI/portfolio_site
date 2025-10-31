// Simple sparkle animation when clicking anywhere ✨
document.addEventListener("click", (e) => {
    const sparkle = document.createElement("span");
    sparkle.textContent = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    sparkle.style.fontSize = "20px";
    sparkle.style.animation = "fade 1s forwards";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes fade {
    0% {opacity: 1; transform: scale(1);}
    100% {opacity: 0; transform: scale(2);}
}`;
document.head.appendChild(style);
