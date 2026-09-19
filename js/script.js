const elements = document.querySelectorAll('ul li');

const textArray = [];

for (const element of elements) {
  console.log(element);

  const text = element.firstChild.textContent.trim();

  if (text) {
    textArray.push(text);
  }
}

console.log(elements);
console.log(textArray);