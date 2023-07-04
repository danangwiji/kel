document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Intersection Observer for fade-in animation
    const fadeElements = document.querySelectorAll(".fade-in");
    const fadeOptions = {
      threshold: 0.5
    };
  
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-active");
          observer.unobserve(entry.target);
        }
      });
    }, fadeOptions);
  
    fadeElements.forEach(element => {
      fadeObserver.observe(element);
    });
  
    // Parallax effect
    const parallaxElements = document.querySelectorAll(".parallax");
    const parallaxOptions = {
      threshold: 0.5
    };
  
    const parallaxObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = `translateY(${entry.intersectionRatio * 100}px)`;
        }
      });
    }, parallaxOptions);
  
    parallaxElements.forEach(element => {
      parallaxObserver.observe(element);
    });
  });
  