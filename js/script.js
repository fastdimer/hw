const input = document.querySelector('.input');
const addButton = document.querySelector('.button');
const list = document.querySelector('.list');


list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const li = event.target.closest('li');
        li.remove();

        return;
    }
    const li = event.target.closest('li');
    if (!li){ 
      return;
    }
    li.classList.toggle('selected');
});


addButton.addEventListener('click', () => {
const text = input.value.trim();

  if (!text) {
    return;
}
const li = document.createElement('li');

li.append(text);

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete');
deleteButton.textContent = '✖';

li.append(deleteButton);
list.append(li);
input.value = '';
});