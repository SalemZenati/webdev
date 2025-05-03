// Add or remove a class when element is in view
export const toggleClassOnScroll = (element: HTMLElement, className: string): void => {
  if (!element) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(element);
};

// Smoothly scroll to element
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  element.scrollIntoView({ behavior: 'smooth' });
};

// Initialize all animations
export const initAnimations = (): void => {
  // Add animation classes to elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  animatedElements.forEach((element) => {
    if (element instanceof HTMLElement) {
      const animationClass = element.dataset.animate || 'fade-in';
      toggleClassOnScroll(element, animationClass);
    }
  });
  
  // Add scroll event listeners to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        const targetId = href.substring(1);
        scrollToElement(targetId);
      }
    });
  });
};