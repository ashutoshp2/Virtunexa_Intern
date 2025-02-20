 // script.js
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (newTaskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = newTaskInput.value;
        taskList.appendChild(newTask);
        newTaskInput.value = '';
    }
}

// Scroll to notifications section when clicking the notification icon
document.getElementById('notification-icon').addEventListener('click', () => {
    const notificationsWidget = document.getElementById('notifications-widget');
    notificationsWidget.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
});

// Example of dynamic notification count update
function updateNotificationCount(count) {
    const notificationCount = document.getElementById('notification-count');
    notificationCount.textContent = count;
}

// Example of adding a new notification
function addNotification(message) {
    const notificationList = document.getElementById('notification-list');
    const newNotification = document.createElement('li');
    newNotification.textContent = message;
    notificationList.appendChild(newNotification);
}

// Example usage
updateNotificationCount(3);
addNotification('New notification: System update available');