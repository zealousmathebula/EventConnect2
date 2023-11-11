const events = [
    { id: 1, name: 'Conference A', date: '2023-12-01', location: 'City A', description: 'A great conference' },
    { id: 2, name: 'Workshop B', date: '2023-12-15', location: 'City B', description: 'An informative workshop' },
    // Add more events as needed
];

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    if (pageId === 'events') {
        displayEvents();
    } else if (pageId === 'registration') {
        displayRegistrationForm();
    }
}

function displayEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${event.name}</strong>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(listItem);
    });
}

function displayRegistrationForm() {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.innerHTML = '';

    // You can customize the registration form fields here

    // Example form fields:
    registrationForm.innerHTML = `
        <label for="eventName">Event Name:</label>
        <select id="eventName" required>
            ${events.map(event => `<option value="${event.id}">${event.name}</option>`).join('')}
        </select>
        <br>
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" required>
        <br>
        <!-- Add more form fields as needed -->
    `;
}

function register() {
    // This is a placeholder function and would typically involve sending data to a server
    // for storage and processing. In this example, we'll just display an alert.

    alert('Registration successful!');
}
