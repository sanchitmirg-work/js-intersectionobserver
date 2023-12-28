// Import stylesheets
import './style.css';

const cards = document.querySelectorAll('.card');

let observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
