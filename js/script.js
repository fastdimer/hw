const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('focus', () => {
  output.hidden = false;
})

input.addEventListener('blur', () => {
  output.hidden = true;
})