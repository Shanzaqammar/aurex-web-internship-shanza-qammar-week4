# AUREX Full-Stack Engineering Internship - Week 4

**Intern Name:** Shanza Qammar  
**Domain:** Frontend Development  
**Week:** 4  
**Project:** JavaScript Task Management Application  

---

## Live Deployment Link

🔗 https://shanzaqammar.github.io/aurex-web-internship-shanza-qammar-week4/

---

## Technologies Used
- HTML5
- CSS3 (Flexbox, CSS Variables, Responsive Design)
- Vanilla JavaScript (ES6+)
- DOM Manipulation
- localStorage API

---

## Features Implemented
- ✅ Add new task
- ✅ Edit existing task
- ✅ Delete task
- ✅ Mark task as complete
- ✅ Filter tasks (All / Active / Completed)
- ✅ Form validation (empty input, 100 char limit)
- ✅ Save tasks in localStorage
- ✅ Retrieve tasks after page refresh
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Task counter (total + completed)

---

## JavaScript Exercises Completed

### 1. Variables & Data Types
- Used `let` and `const` for variable declarations
- Worked with strings, numbers, booleans, arrays, and objects

### 2. Conditional Logic
- Used `if`, `else`, and comparison operators for validation
- Applied logical operators (`&&`, `||`) for filter logic

### 3. Loops & Iteration
- Used `forEach()` for iterating over task arrays
- Used `map()` and `filter()` for array transformations

### 4. Functions
- Created multiple functions: `addTask()`, `deleteTask()`, `editTask()`, `toggleComplete()`, `renderTasks()`
- Used arrow functions for callbacks
- Used parameters and return values

### 5. Arrays
- Created and manipulated arrays using `push()`, `filter()`, `map()`
- Accessed and updated array elements

### 6. Objects
- Created task objects with `id`, `text`, `completed`, `createdAt` properties
- Used object spread operator (`...`) for immutability

### 7. DOM Manipulation
- Selected elements using `getElementById()` and `querySelectorAll()`
- Created elements using `createElement()`
- Updated UI dynamically using `innerHTML` and `appendChild()`

### 8. Events
- Handled `submit` event on form
- Handled `click` events on buttons
- Handled `change` events on checkboxes

### 9. localStorage
- Saved data using `localStorage.setItem()` with `JSON.stringify()`
- Retrieved data using `localStorage.getItem()` with `JSON.parse()`
- Data persists after page refresh

---

## Challenges Faced & What I Learned

### Challenge 1: Making Data Persist After Refresh
**Solution:** I learned how to use `localStorage` with `JSON.stringify()` and `JSON.parse()` to save and retrieve the tasks array. This was my first time working with browser storage.

### Challenge 2: Dynamic DOM Manipulation
**Solution:** I learned how to create elements dynamically using `document.createElement()` and attach event listeners to them after rendering.

### Challenge 3: Filter Logic
**Solution:** I used `Array.filter()` with different conditions for "All", "Active", and "Completed" filters.

### Challenge 4: Form Validation
**Solution:** I added checks for empty input and maximum character length, displaying error messages to the user.

### What I Learned:
- How to structure a JavaScript application with clear separation of concerns
- How to use ES6+ features like arrow functions, template literals, and spread operator
- How localStorage works and why it's useful for small apps
- The importance of `escapeHTML()` for security when rendering user input
- How to write clean, readable, and maintainable JavaScript code

---

## Folder Structure
