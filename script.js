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

// Javascript to make sure mobile drop down menu pulls back up upon click and
// for the drop down menu animation
document.addEventListener('DOMContentLoaded', function() {
  function toggleSubMenu(event) {
    event.stopPropagation(); // Prevents the event from triggering on parent elements

    const element = event.currentTarget;
    const submenu = element.querySelector('ul');
    const icon = element.querySelector('i');
    
    if (element.classList.contains('open')) {
      // Collapse submenu
      element.classList.remove('open');
      submenu.style.maxHeight = '0';
    } else {
      // Expand submenu
      closeOpenSubMenu(); // Ensure other submenus are closed
      element.classList.add('open');
      submenu.style.maxHeight = submenu.scrollHeight + 'px';
      submenu.style.transform = 'translateY(20px)'; // Push the submenu down
    }

    icon.style.transform = element.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  // Function to close any open submenus
  function closeOpenSubMenu() {
    const openDropdown = document.querySelector('.drop.open');
    if (openDropdown) {
      const submenu = openDropdown.querySelector('ul');
      const icon = openDropdown.querySelector('i');
      
      openDropdown.classList.remove('open');
      submenu.style.maxHeight = '0';
      icon.style.transform = 'rotate(0deg)';
    }
  }

  // Add event listener to document to close the submenu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.sidebarMenuInner')) {
      closeOpenSubMenu();
    }
  });

  // Add event listeners to main menu items to close the submenu if clicked
  document.querySelectorAll('.sidebarMenuInner > li:not(.drop)').forEach(item => {
    item.addEventListener('click', function(event) {
      event.stopPropagation();
      closeOpenSubMenu();
    });
  });

  // Add event listeners to the submenu toggle items
  document.querySelectorAll('.drop').forEach(drop => {
    drop.addEventListener('click', toggleSubMenu);
  });

  // Ensure submenu items do not propagate the click event to prevent closing the submenu
  document.querySelectorAll('.drop ul li a').forEach(subItem => {
    subItem.addEventListener('click', function(event) {
      event.stopPropagation();
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

//Open up a lightbox for photos in photography tabs
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.photo-grid .photo-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  images.forEach(function(img) {
    img.ondragstart = function() {
      return false;
    };

    img.addEventListener('click', function() {
      lightboxImg.src = img.src;
      lightbox.style.display = 'block';
      setTimeout(function() {
        lightbox.classList.add('show');
      }, 10); // Slight delay to allow transition
    });
  });

  document.querySelector('.close').addEventListener('click', function() {
    lightbox.classList.remove('show');
    setTimeout(function() {
      lightbox.style.display = 'none';
    }, 500); // Wait for the transition to finish
  });

  // Close the lightbox when clicking outside the image
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.classList.remove('show');
      setTimeout(function() {
        lightbox.style.display = 'none';
      }, 500); // Wait for the transition to finish
    }
  });
});








