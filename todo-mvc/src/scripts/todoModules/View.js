export default function View() {
    const todoList = document.querySelector('[data-todo-list]');

    const createForm = document.querySelector('[data-create-form]');
    const createTitle = document.querySelector('[data-create-title]');
    const createDescription = document.querySelector('[data-create-description]');

    const searchForm = document.querySelector('[data-search-form]');
    const searchInput = document.querySelector('[data-search]');
    const filters = document.querySelector('[data-filters]');

    const editModalElement = document.querySelector('[data-edit-modal]');
    const editForm = document.querySelector('[data-edit-form]');
    const editId = document.querySelector('[data-edit-id]');
    const editTitle = document.querySelector('[data-edit-title]');
    const editDescription = document.querySelector('[data-edit-description]');

    const deleteModalElement = document.querySelector('[data-delete-modal]');
    const deleteTitle = document.querySelector('[data-delete-title]');
    const deleteConfirm = document.querySelector('[data-delete-confirm]');

    const editModal = new bootstrap.Modal(editModalElement);
    const deleteModal = new bootstrap.Modal(deleteModalElement);

    function renderTodos(todos){
        todoList.textContent = '';

        if (!todos.length) {
            const message = document.createElement('p');
            message.textContent = 'Задач поки немає';
            todoList.append(message);
            return;
        }

        todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.className = 'card mb-3';
            todoElement.dataset.todoId = todo.id;

            const body = document.createElement('div');
            body.className = 'card-body';

            const header = document.createElement('div');
            header.className = 'd-flex align-items-center gap-3';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.dataset.toggle = '';

            const title = document.createElement('h5');
            title.textContent = todo.title;
            title.className = 'mb-0';

            if (todo.completed){
                title.classList.add('text-decoration-line-through', 'text-secondary');
            }

            const description = document.createElement('p');
            description.textContent = todo.description;
            description.className = 'mt-3';

            const date = document.createElement('small');
            date.textContent = `Updated: ${todo.updatedAt}`;
            date.className = 'text-secondary';

            const buttons = document.createElement('div');
            buttons.className = 'd-flex gap-2 mt-3';

            const editButton = document.createElement('button');
            editButton.type = 'button';
            editButton.textContent = 'Edit';
            editButton.className = 'btn btn-warning';
            editButton.dataset.edit = '';

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'btn btn-danger';
            deleteButton.dataset.delete = '';

            header.append(checkbox, title);
            buttons.append(editButton, deleteButton);
            body.append(header, description, date, buttons);
            todoElement.append(body);
            todoList.append(todoElement);
        });
    }

    function renderEditTodoModalData(todo){
        editId.value = todo.id;
        editTitle.value = todo.title;
        editDescription.value = todo.description;
    }

    function renderDeleteTodoModalData(todo){
        deleteTitle.textContent = todo.title;
        deleteConfirm.dataset.todoId = todo.id;
    }

    function setActiveFilter(status){
        const buttons = filters.querySelectorAll('[data-filter]');

        buttons.forEach(button => {
            button.classList.remove('btn-primary');
            button.classList.add('btn-outline-primary');
        });

        const activeButton = filters.querySelector(`[data-filter="${status}"]`);

        if (!activeButton){
            return;
        }

        activeButton.classList.remove('btn-outline-primary');
        activeButton.classList.add('btn-primary');
    }

    function resetCreateForm(){
        createForm.reset();
    }

    return {
        todoList,
        createForm,
        createTitle,
        createDescription,
        searchForm,
        searchInput,
        filters,
        editModalElement,
        editForm,
        editId,
        editTitle,
        editDescription,
        editModal,
        deleteModalElement,
        deleteConfirm,
        deleteModal,
        renderTodos,
        renderEditTodoModalData,
        renderDeleteTodoModalData,
        setActiveFilter,
        resetCreateForm
    };
}