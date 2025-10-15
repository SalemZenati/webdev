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

// Easing function for smooth scroll (ease-in-out)
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Smoothly scroll to element with custom easing
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1200;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
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