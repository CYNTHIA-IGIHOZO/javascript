// Define objects for tasks and categories
const tasks = [];
const categories = {};

// Function to add a task to the ToDo list with a specified category
function addTask(taskName, categoryName) {
    const task = { name: taskName, category: categoryName, completed: false };
    tasks.push(task);
    if (!categories[categoryName]) {
        categories[categoryName] = [];
    }
    categories[categoryName].push(task);
}

// Function to display tasks grouped by their categories
function displayTasks() {
    for (const category in categories) {
        console.log(`Category: ${category}`);
        categories[category].forEach(task => {
            console.log(`- ${task.name} (${task.completed ? 'Completed' : 'Incomplete'})`);
        });
    }
}

// Function to mark a task as completed
function markTask(taskName) {
    const task = tasks.find(task => task.name === taskName);
    if (task) {
        task.completed = true;
        console.log(`Task "${taskName}" marked as completed.`);
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}

// Function to remove a task from the list
function removeTask(taskName) {
    const index = tasks.findIndex(task => task.name === taskName);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1)[0];
        const categoryTasks = categories[removedTask.category];
        const categoryTaskIndex = categoryTasks.findIndex(task => task.name === taskName);
        categoryTasks.splice(categoryTaskIndex, 1);
        console.log(`Task "${taskName}" removed.`);
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}

// Example usage:
addTask('Submit JavaScript HM', 'Homework');
addTask('Complete project assignment', 'Work');
addTask('Buy groceries', 'Personal');

console.log('Tasks');
displayTasks();

markTask('Study JavaScript');

console.log('After marking task as completed:');
displayTasks();

removeTask('Buy groceries');

console.log('After removing task:');
displayTasks();