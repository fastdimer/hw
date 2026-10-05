const cards = document.querySelector('.cards');

cards.addEventListener('click', function(event) {
  const button = event.target.closest('[data-read-more-btn]');

  if (!button) {
  return;
}

const card = button.closest('.card');
card.classList.toggle('expanded');

if (card.classList.contains('expanded')) {
  button.textContent = 'hide';
} else {
  button.textContent = 'read more';
}
});