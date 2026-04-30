// Countdown Logic
const targetDate = new Date("April 19, 2026 08:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) return;
    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Slideshow Logic
let slideIndex = 0;
const images = ["assets/totnghiep.jpeg", "assets/sv5tot.jpg", "assets/baoveluanvan.jpg", "assets/ydcc2025.jpg"];
const imgElement = document.getElementById("slide-image");
const dotsContainer = document.getElementById("dots-container");
let slideTimer;

// Khởi tạo dots
function initDots() {
    dotsContainer.innerHTML = "";
    images.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "dot w-2 h-2 rounded-full bg-white/50 transition-all cursor-pointer";
        dot.onclick = () => currentSlide(i);
        dotsContainer.appendChild(dot);
    });
}

function showSlides(n) {
    if (n >= images.length) slideIndex = 0;
    else if (n < 0) slideIndex = images.length - 1;
    else slideIndex = n;

    // Hiệu ứng fade nhẹ khi đổi ảnh
    imgElement.classList.remove("slide-fade");
    void imgElement.offsetWidth; // trigger reflow
    imgElement.classList.add("slide-fade");
    imgElement.src = images[slideIndex];

    const dots = document.querySelectorAll(".dot");
    if (dots.length > 0) {
        dots.forEach((d) => d.classList.replace("bg-white", "bg-white/50"));
        dots[slideIndex].classList.replace("bg-white/50", "bg-white");
        dots[slideIndex].classList.add("scale-125");
    }
    resetTimer();
}

function nextSlide() {
    showSlides(slideIndex + 1);
}
function prevSlide() {
    showSlides(slideIndex - 1);
}
function currentSlide(n) {
    showSlides(n);
}
function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 5000);
}

// Swipe Logic
let touchstartX = 0;
const swipeArea = document.getElementById("swipe-area");
swipeArea.addEventListener("touchstart", (e) => (touchstartX = e.changedTouches[0].screenX), false);
swipeArea.addEventListener(
    "touchend",
    (e) => {
        let touchendX = e.changedTouches[0].screenX;
        if (touchendX < touchstartX - 50) nextSlide();
        if (touchendX > touchstartX + 50) prevSlide();
    },
    false
);

// Confetti
function spawnConfetti() {
    const colors = ["#ffd700", "#ffffff", "#3b82f6", "#1e40af"];
    for (let i = 0; i < 30; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-10px";
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(c);
        const dur = Math.random() * 3 + 3;
        c.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 },
            ],
            { duration: dur * 1000 }
        );
        setTimeout(() => c.remove(), dur * 1000);
    }
}

window.addEventListener("load", () => {
    initDots();
    showSlides(0);
    spawnConfetti();
    setInterval(spawnConfetti, 10000);
});
