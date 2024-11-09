const carousel = document.querySelector(".product-carousel");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 600, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -600, behavior: "smooth" });
});

const header = document.querySelector(".header");
const nav = document.querySelector(".navbar");
const navHeight = nav.getBoundingClientRect().height;

// Function to handle the sticky behavior
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky", "visible");
  } else {
    nav.classList.remove("sticky", "visible");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
