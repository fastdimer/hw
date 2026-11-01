export default function Controller(model, view) {
    let searchQuery = '';

    function getFilterFromUrl(){
        const url = new URL(location.href);
        const filter = url.searchParams.get('filter');

        if (filter === 'active' || filter === 'completed'){
            return filter;
        }

        return 'all';
    }

    function changeUrlParameter(name, value){
        const url = new URL(location.href);

        if (value === null) {
            url.searchParams.delete(name);
        } else {
            url.searchParams.set(name, value);
        }

        history.pushState({}, '', url);
    }

    function setModalUrl(action, todoId){
        const url = new URL(location.href);

        url.searchParams.set('action', action);
        url.searchParams.set('todoId', todoId);

        history.pushState({}, '', url);
    }

    function clearModalUrl() {
        const url = new URL(location.href);

        url.searchParams.delete('action');
        url.searchParams.delete('todoId');

        history.pushState({}, '', url);
    }

    function renderTodos(){
        const filter = getFilterFromUrl();
        const searchedTodos = model.searchTodos(searchQuery);
        const todos = model.filterTodos(filter, searchedTodos);

        view.renderTodos(todos);
        view.setActiveFilter(filter);
    }

    function openModalFromUrl(){
        const url = new URL(location.href);
        const action = url.searchParams.get('action');
        const todoId = url.searchParams.get('todoId');

        if (!action || !todoId){
            return;
        }

        const todo = model.getTodoById(todoId);

        if (!todo){
            return;
        }

        if (action === 'edit'){
            view.renderEditTodoModalData(todo);
            view.editModal.show();
        }

        if (action === 'delete'){
            view.renderDeleteTodoModalData(todo);
            view.deleteModal.show();
        }
    }

    view.createForm.addEventListener('submit', event => {
        event.preventDefault();

        const todo = model.addTodo({
            title: view.createTitle.value,
            description: view.createDescription.value
        });

        if (!todo) {
            view.createTitle.focus();
            return;
        }

        view.resetCreateForm();
        renderTodos();
    });

    view.todoList.addEventListener('click', event => {
        const todoElement = event.target.closest('[data-todo-id]');

        if (!todoElement) {
            return;
        }

        const todoId = Number(todoElement.dataset.todoId);

        if (event.target.closest('[data-toggle]')){
            model.toggleTodoById(todoId);
            renderTodos();
            return;
        }

        if (event.target.closest('[data-edit]')){
            const todo = model.getTodoById(todoId);

            if (!todo) {
                return;
            }

            view.renderEditTodoModalData(todo);
            setModalUrl('edit', todoId);
            view.editModal.show();
            return;
        }

        if (event.target.closest('[data-delete]')){
            const todo = model.getTodoById(todoId);

            if (!todo) {
                return;
            }

            view.renderDeleteTodoModalData(todo);
            setModalUrl('delete', todoId);
            view.deleteModal.show();
        }
    });

    view.editForm.addEventListener('submit', event => {
        event.preventDefault();

        const title = view.editTitle.value.trim();

        if (!title) {
            view.editTitle.focus();
            return;
        }

        model.updateTodoById({
            id: Number(view.editId.value),
            title: view.editTitle.value,
            description: view.editDescription.value
        });

        view.editModal.hide();
        renderTodos();
    });

    view.deleteConfirm.addEventListener('click', () => {
        const todoId = Number(view.deleteConfirm.dataset.todoId);

        model.removeTodoById(todoId);
        view.deleteModal.hide();
        renderTodos();
    });

    view.searchForm.addEventListener('submit', event => {
        event.preventDefault();

        searchQuery = view.searchInput.value;
        renderTodos();
    });

    view.filters.addEventListener('click', event => {
        const button = event.target.closest('[data-filter]');

        if (!button) {
            return;
        }

        const filter = button.dataset.filter;

        if (filter === 'all') {
            changeUrlParameter('filter', null);
        } else {
            changeUrlParameter('filter', filter);
        }

        renderTodos();
    });

    view.editModalElement.addEventListener('hidden.bs.modal', () => {
        clearModalUrl();
    });

    view.deleteModalElement.addEventListener('hidden.bs.modal', () => {
        clearModalUrl();
    });

    document.addEventListener('DOMContentLoaded', () => {
        renderTodos();
        openModalFromUrl();
    });

    return {
        renderTodos,
        openModalFromUrl
    };
}