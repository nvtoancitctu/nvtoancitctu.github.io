/* ==================== 
  toggle icon navbar 
====================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* =========================== 
    Scroll Section Active Link 
============================= */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /* ========================
      Sticky Navbar 
=========================== */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* ===================== 
    Menu Icon Navbar 
====================== */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* ===================== 
    Scroll Reveal 
====================== */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* ===================== 
    Typed Js 
====================== */
const typed = new Typed(".multiple-text", {
  strings: ["Website Dev", "Laravel/PHP Dev", "Tailwind CSS Enthusiast"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* ===================== 
     Animate on scroll
  ==================== */
  const scrollElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.1 }
  );

  scrollElements.forEach((el) => observer.observe(el));
  
/* ===================== 
    Partners Slider 
====================== */
function initSlider() {
    const container = document.querySelector('.partners-container');
    const boxes = document.querySelectorAll('.partner-box');
    const btnNext = document.querySelector('.btn-next');
    const btnPrev = document.querySelector('.btn-prev');
    let index = 0;

    function getVisibleItems() {
        const containerWidth = document.querySelector('.partners-slider').offsetWidth;
        const itemWidth = boxes[0].offsetWidth + parseInt(getComputedStyle(container).gap);
        return Math.floor(containerWidth / itemWidth);
    }

    function updateSlider() {
        const itemWidth = boxes[0].getBoundingClientRect().width + parseInt(getComputedStyle(container).gap);
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    btnNext.onclick = () => {
        const visibleItems = getVisibleItems();
        index++;
        if (index > boxes.length - visibleItems - 1) index = 0;
        updateSlider();
    };

    btnPrev.onclick = () => {
        index--;
        if (index < 0) index = boxes.length - getVisibleItems() - 1;
        updateSlider();
    };

    window.addEventListener('resize', updateSlider);
    updateSlider();
}

initSlider();
