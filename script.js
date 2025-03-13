function addReminder() {
    const input = document.getElementById('reminder-input');
    const reminderText = input.value.trim();

    if (reminderText !== '') {
        const reminderList = document.getElementById('reminder-list');
        const newReminder = document.createElement('li');
        newReminder.textContent = reminderText;
        reminderList.appendChild(newReminder);
        input.value = '';
    } else {
        alert('Por favor, escribe un recordatorio.');
    }
}
