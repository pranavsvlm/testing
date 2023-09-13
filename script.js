document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector("img");
  
    function animateRotation() {
      gsap.to(image, {
        rotation: 45, 
        duration: 2, 
        ease: "power1.inOut", 
        onComplete: function () {
          gsap.to(image, {
            rotation: -45, 
            duration: 2,
            ease: "power1.inOut", 
            onComplete: animateRotation, 
          });
        },
      });
    }
  
    animateRotation();
  });

  
document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.getElementById("floating-arrow");
  
    function floatArrow() {
      gsap.to(arrow, {
        y: 20, 
        duration: 1,
        yoyo: true, 
        repeat: -1,
        ease: "power1.inOut", 
      });
    }
  
    floatArrow();
  });
  

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("fade-up-text");
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function fadeUpText() {
      if (isInViewport(textElement) && textElement.style.opacity !== "1") {
        gsap.to(textElement, {
          opacity: 1,
          y: -50, 
          duration: 2, 
          ease: "power2.inOut", 
        });
      }
    }
  
    window.addEventListener("scroll", fadeUpText);
  
    fadeUpText();
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const dynamicSquare = document.getElementById("dynamicSquare");

  function smoothTransition(isRounded) {
    gsap.to(dynamicSquare, {
      borderTopLeftRadius: isRounded ? "50%" : "0%",
      borderTopRightRadius: isRounded ? "50%" : "0%",
      duration: 1, 
      ease: "power2.inOut",
    });
  }

  let isRounded = true;
  smoothTransition(isRounded);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 200 && isRounded) {
      isRounded = false;
      smoothTransition(isRounded); 
    } else if (scrollPosition < 200 && !isRounded) {
      isRounded = true;
      smoothTransition(isRounded);
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

const animations = [
    { element: "#rotatingImage", y: -100, opacity: 0 },
    { element: "#dynamicSquare", y: 100, opacity: 0 },
    { element: "#floating-arrow", y: -100, opacity: 0 },
    { element: "#fade-up-text", y: -100, opacity: 0 },
    { element: "h1", y: -100, opacity: 0 },
];

animations.forEach((animation) => {
    gsap.to(animation.element, {
        y: animation.y,
        opacity: animation.opacity,
        ease: "power3.out",
        scrollTrigger: {
            trigger: animation.element,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart pause reverse pause",
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("fade-up-text");
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function fadeUpText() {
      if (isInViewport(textElement) && textElement.style.opacity !== "1") {
        gsap.to(textElement, {
          opacity: 1,
          y: 100, 
          duration: 10, 
          ease: "power2.inOut", 
        });
      }
    }
  
    window.addEventListener("scroll", fadeUpText);
  
    fadeUpText();
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector("h2");
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function fadeInText() {
      if (isInViewport(heading) && heading.style.opacity !== "1") {
        gsap.to(heading, {
          opacity: 1,
          duration: 1.5, 
          ease: "power2.inOut",
        });
      }
    }
    window.addEventListener("scroll", fadeInText);
  
    fadeInText();
  });