// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL3_TQ6CUufMZIQPErXOxEyi2AJlk6AOo",
    authDomain: "shreedev-exim.firebaseapp.com",
    projectId: "shreedev-exim",
    storageBucket: "shreedev-exim.appspot.com",
    messagingSenderId: "469787762916",
    appId: "1:469787762916:web:239b5a87b0a75a87aa4cf1",

};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Get form elements
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Listen for form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user input
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;

    // Save data to Firebase Realtime Database
    const newContactRef = database.ref('contacts').push();
    newContactRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });

    // Clear the form
    contactForm.reset();
});
