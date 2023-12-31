  // JavaScript to hide the loading animation after the page loads
window.addEventListener("load", function () {
  const loadingAnimation = document.querySelector(".loading-animation");
  loadingAnimation.style.display = "none";
});

  document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const accordionItem = button.parentElement;
      const accordionContent = accordionItem.querySelector(".accordion-content");
      const arrowIcon = button.querySelector(".arrow-icon");

      // Calculate the height of the content to set as the max-height
      const contentHeight = accordionContent.scrollHeight;

      // Check if the accordion content is currently open
      const isOpen = accordionContent.classList.contains("open");

      /*// Close other open accordion items
      accordionButtons.forEach((otherButton) => {
        const otherAccordionItem = otherButton.parentElement;
        const otherAccordionContent = otherAccordionItem.querySelector(".accordion-content");
        if (otherButton !== button && otherAccordionContent.classList.contains("open")) {
          otherAccordionContent.style.maxHeight = "0";
          otherAccordionContent.classList.remove("open");
          const otherArrowIcon = otherButton.querySelector(".arrow-icon");
          otherArrowIcon.classList.remove("rotate");
        }
      });*/

      // Toggle the "open" class to show/hide the accordion content
      if (!isOpen) {
        accordionContent.style.maxHeight = `${contentHeight}px`;
        accordionContent.style.opacity = "1";
        arrowIcon.classList.add("rotate");
      } else {
        accordionContent.style.maxHeight = "0";
        accordionContent.style.opacity = "0";
        arrowIcon.classList.remove("rotate");
      }

      // Use setTimeout to set the final "open" class after the transition completes
      setTimeout(() => {
        accordionContent.classList.toggle("open");
      }, 300); // Change this value to match the transition duration in CSS (300ms)

    });
  });
});

// JavaScript to handle the flipping effect on click
document.addEventListener("DOMContentLoaded", function () {
  const mediaCards = document.querySelectorAll(".media-service-card");

  mediaCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.fadein');

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // Trigger once 15% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Add the 'active' class to trigger the fade-in effect
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});





