import { STORAGE_KEY } from '../constants.js';
import initialTodos from '../data/todos.js';

export default function Model(){
    function saveData(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }

    function getData(){
        const savedTodos = localStorage.getItem(STORAGE_KEY);

        if (!savedTodos){
            saveData(initialTodos);
            return initialTodos;
        }

        return JSON.parse(savedTodos);
    }

    function getTodoById(id){
        const todos = getData();
        return todos.find(todo => todo.id === Number(id));
    }

    function getDate(){
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    function addTodo({ title, description }){
        const todos = getData();
        const todoTitle = title.trim();

        if (!todoTitle) {
            return false;
        }

        const maxId = todos.reduce((maxId, todo) => {
            return Math.max(maxId, todo.id);
        }, 0);

        const newTodo = {
            id: maxId + 1,
            title: todoTitle,
            description: description.trim(),
            completed: false,
            createdAt: getDate(),
            updatedAt: getDate()
        };

        todos.push(newTodo);
        saveData(todos);

        return newTodo;
    }

    function updateTodoById(nextTodo){
        const todos = getData();
        const index = todos.findIndex(todo => todo.id === Number(nextTodo.id));

        if (index === -1) {
            return false;
        }

        const title = nextTodo.title.trim();

        if (!title) {
            return false;
        }

        todos[index] = {
            ...todos[index],
            title,
            description: nextTodo.description.trim(),
            updatedAt: getDate()
        };

        saveData(todos);

        return todos[index];
    }

    function toggleTodoById(id){
        const todos = getData();
        const todo = todos.find(todo => todo.id === Number(id));

        if (!todo) {
            return false;
        }

        todo.completed = !todo.completed;
        todo.updatedAt = getDate();

        saveData(todos);

        return todo;
    }

    function removeTodoById(id){
        const todos = getData();
        const newTodos = todos.filter(todo => todo.id !== Number(id));

        saveData(newTodos);

        return newTodos;
    }

    function searchTodos(query){
        const todos = getData();
        const searchValue = query.trim().toLowerCase();

        if (!searchValue) {
            return todos;
        }

        return todos.filter(todo => {
            return todo.title.toLowerCase().includes(searchValue);
        });
    }

    function filterTodos(status, todos = getData()) {
        if (status === 'active') {
            return todos.filter(todo => !todo.completed);
        }

        if (status === 'completed') {
            return todos.filter(todo => todo.completed);
        }

        return todos;
    }

    return {
        getData,
        getTodoById,
        addTodo,
        updateTodoById,
        toggleTodoById,
        removeTodoById,
        searchTodos,
        filterTodos
    };
}