/* =========================================
   AUREX Week 4 - Task Management App
   Author: Shanza Qammar
   ========================================= */

// =========================================
// 1. DOM ELEMENTS
// =========================================
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const validationMsg = document.getElementById('validationMsg');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const emptyState = document.getElementById('emptyState');
const filterButtons = document.querySelectorAll('.filters__btn');

// =========================================
// 2. STATE VARIABLES
// =========================================
let tasks = [];
let currentFilter = 'all';

// =========================================
// 3. LOCALSTORAGE FUNCTIONS
// =========================================
function saveTasksToStorage() {
    localStorage.setItem('shanzaTasks', JSON.stringify(tasks));
}

function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('shanzaTasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    } else {
        tasks = [];
    }
}

// =========================================
// 4. VALIDATION FUNCTION
// =========================================
function showValidationMessage(message) {
    validationMsg.textContent = message;
    setTimeout(() => {
        validationMsg.textContent = '';
    }, 3000);
}

// =========================================
// 5. ADD TASK
// =========================================
function addTask(taskText) {
    const newTask = {
        id: Date.now(),
        text: taskText.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    tasks.push(newTask);
    saveTasksToStorage();
    renderTasks();
}

// =========================================
// 6. DELETE TASK
// =========================================
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage();
    renderTasks();
}

// =========================================
// 7. TOGGLE COMPLETE
// =========================================
function toggleComplete(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasksToStorage();
    renderTasks();
}

// =========================================
// 8. EDIT TASK
// =========================================
function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    const newText = prompt('Edit your task:', task.text);
    if (newText === null) return;

    if (newText.trim() === '') {
        showValidationMessage('Task cannot be empty.');
        return;
    }

    tasks = tasks.map(t => {
        if (t.id === taskId) {
            return { ...t, text: newText.trim() };
        }
        return t;
    });
    saveTasksToStorage();
    renderTasks();
}

// =========================================
// 9. FILTER TASKS
// =========================================
function getFilteredTasks() {
    if (currentFilter === 'active') {
        return tasks.filter(task => !task.completed);
    }
    if (currentFilter === 'completed') {
        return tasks.filter(task => task.completed);
    }
    return tasks;
}

// =========================================
// 10. RENDER TASKS
// =========================================
function renderTasks() {
    const filteredTasks = getFilteredTasks();

    taskList.innerHTML = '';

    if (filteredTasks.length === 0) {
        emptyState.classList.remove('empty-state--hidden');
    } else {
        emptyState.classList.add('empty-state--hidden');
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item' + (task.completed ? ' task-item--completed' : '');
        li.dataset.id = task.id;

        li.innerHTML = `
            <input 
                type="checkbox" 
                class="task-item__checkbox" 
                ${task.completed ? 'checked' : ''}
            >
            <span class="task-item__text">${escapeHTML(task.text)}</span>
            <div class="task-item__actions">
                <button class="task-item__btn task-item__btn--edit">Edit</button>
                <button class="task-item__btn task-item__btn--delete">Delete</button>
            </div>
        `;

        const checkbox = li.querySelector('.task-item__checkbox');
        checkbox.addEventListener('change', () => toggleComplete(task.id));

        const editBtn = li.querySelector('.task-item__btn--edit');
        editBtn.addEventListener('click', () => editTask(task.id));

        const deleteBtn = li.querySelector('.task-item__btn--delete');
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        taskList.appendChild(li);
    });

    updateTaskCount();
}

// =========================================
// 11. UPDATE TASK COUNTER
// =========================================
function updateTaskCount() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    taskCount.textContent = `${total} task${total !== 1 ? 's' : ''} (${completed} completed)`;
}

// =========================================
// 12. ESCAPE HTML (Security)
// =========================================
function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// =========================================
// 13. FORM SUBMIT EVENT
// =========================================
// 13. FORM SUBMIT & ADD TASK EVENTS
function handleAddTask(e) {
    if (e) e.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        showValidationMessage('Please enter a task before adding.');
        return;
    }

    if (taskText.length > 100) {
        showValidationMessage('Task is too long (max 100 characters).');
        return;
    }

    addTask(taskText);
    taskInput.value = '';
    taskInput.focus();
}

taskForm.addEventListener('submit', handleAddTask);

const addTaskBtn = taskForm.querySelector('button');
addTaskBtn.addEventListener('click', handleAddTask);

// =========================================
// 14. FILTER BUTTON EVENTS
// =========================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('filters__btn--active'));
        button.classList.add('filters__btn--active');
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

// =========================================
// 15. INITIALIZE APP
// =========================================
function initApp() {
    loadTasksFromStorage();
    renderTasks();
}

initApp();
