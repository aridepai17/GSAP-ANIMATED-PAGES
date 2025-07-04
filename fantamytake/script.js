// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Set initial positions for all animated elements
gsap.set("#fanta", { top: "50%", left: "50%", xPercent: -50, yPercent: -50 });
gsap.set("#orange-cut", { top: "55%", right: "30%", scale: 0.55 });
gsap.set("#orange", { top: "50%", right: "20%", width: "25%" });
gsap.set("#leaf", { top: "10%", left: "0%", rotation: 60 });
gsap.set("#leaf2", { top: "70%", left: "80%", rotation: -90 });
gsap.set("#leaf3", { top: "10%", right: "0%" });

// Set initial positions for product cards
gsap.set(".lemon1", { x: -300, y: 0, rotation: -90, opacity: 0 });
gsap.set("#cocacola", { x: -300, y: 100, rotation: -90, opacity: 0 });
gsap.set(".lemon2", { x: 300, y: 0, rotation: 90, opacity: 0 });
gsap.set("#pepsi", { x: 300, y: 100, rotation: 90, opacity: 0 });

// Timeline 1: Animate elements when scrolling to section two
let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    // markers: true, // Uncomment for debugging
  },
});

tl1
  .to(
    "#fanta",
    {
      top: "120%",
      left: "0%",
      xPercent: 0,
      yPercent: 0,
      duration: 1,
    },
    "moveElements"
  )
  .to(
    "#orange-cut",
    {
      top: "160%",
      left: "23%",
      right: "auto",
      duration: 1,
      scale: 1.25,
    },
    "moveElements"
  )
  .to(
    "#orange",
    {
      width: "15%",
      top: "160%",
      right: "10%",
      duration: 1,
    },
    "moveElements"
  )
  .to(
    "#leaf",
    {
      top: "110%",
      left: "70%",
      rotation: 130,
      duration: 1,
    },
    "moveElements"
  )
  .to(
    "#leaf2",
    {
      top: "110%",
      left: "0%",
      rotation: 130,
      duration: 1,
    },
    "moveElements"
  );

// Timeline 2: Animate product cards when scrolling to section three
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top 85%",
    end: "center 50%",
    scrub: 1,
    // markers: true, // Uncomment for debugging
  },
});

tl2
  .to(
    ".lemon1",
    {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1,
    },
    "showCards"
  )
  .to(
    "#cocacola",
    {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1,
    },
    "showCards"
  )
  .to(
    ".lemon2",
    {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1,
    },
    "showCards"
  )
  .to(
    "#pepsi",
    {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 1,
    },
    "showCards"
  )
  .to(
    "#orange-cut",
    {
      width: "18%",
      left: "42%",
      top: "204%",
      duration: 1,
    },
    "showCards"
  )
  .to(
    "#fanta",
    {
      width: "35%",
      top: "210%",
      left: "33%",
      duration: 1,
    },
    "showCards"
  );

// Timeline 3: Add some hover effects for cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});

// Additional smooth scroll behavior
ScrollTrigger.refresh();

// Debug function - uncomment to check if elements exist
/*
function checkElements() {
  const elements = ['#fanta', '#orange-cut', '#orange', '#leaf', '#leaf2', '#leaf3', 
                   '.lemon1', '#cocacola', '.lemon2', '#pepsi', '.two', '.three'];
  
  elements.forEach(el => {
    const element = document.querySelector(el);
    console.log(`${el}: ${element ? 'Found' : 'Not found'}`);
  });
}

// Call this function to debug
// checkElements();
*/
