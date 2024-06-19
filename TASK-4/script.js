document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const completeButton = createCompleteButton(listItem);
        const removeButton = createRemoveButton(listItem);

        listItem.appendChild(completeButton);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        newTaskInput.value = '';
        newTaskInput.focus();
    }

    function createCompleteButton(listItem) {
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            listItem.classList.add('completed');
            completedTaskList.appendChild(listItem);
            listItem.removeChild(completeButton);
        });
        return completeButton;
    }

    function createRemoveButton(listItem) {
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            listItem.remove();
        });
        return removeButton;
    }
});
