// Mock data for events (replace this with actual data from a database)
const eventsData = [
    { title: "Event 1", date: "2023-12-01", time: "10:00 AM", location: "Venue A", description: "Description for Event 1" },
    { title: "Event 2", date: "2023-12-15", time: "02:00 PM", location: "Venue B", description: "Description for Event 2" },
    // Add more events as needed
];

// Function to register for an event
function registerForEvent(eventTitle) {
    alert(`You are now registered for ${eventTitle}`);
}

// Function to handle registration form submission
function submitRegistration() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const selectedEvents = Array.from(document.getElementById("selectedEvents").selectedOptions).map(option => option.text);

    // Perform registration logic (you can send this data to a server using AJAX/fetch)
    alert(`Registration Details:\nFull Name: ${fullName}\nEmail: ${email}\nSelected Events: ${selectedEvents.join(", ")}`);
}

// Function to navigate to the homepage
function goToHomePage() {
    // You can modify this to navigate using window.location or other methods
    alert("Navigating to the homepage");
}
// script.js
function goToContactPage() {
    window.location.href = "contact.html"; // Navigate to the contact page
}

// Attach event listener to the Contact button
document.getElementById("contactButton").addEventListener("click", goToContactPage);

// Attach event listeners to buttons
document.getElementById("homeButton").addEventListener("click", goToHomePage);
document.getElementById("registrationButton").addEventListener("click", submitRegistration);
