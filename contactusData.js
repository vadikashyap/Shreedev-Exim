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
const db = firebase.database();
const dataRef = db.ref("contacts"); // Replace with your data node path

// Function to populate the table
function populateTable(data) {
    const tableBody = document.getElementById("tableBody");

    // Clear existing table data
    tableBody.innerHTML = "";

    // Loop through the data and create table rows
    data.forEach((item) => {
        const row = document.createElement("tr");

        // Create table cells and populate them with data
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = item.name;
        row.appendChild(firstNameCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = item.email;
        row.appendChild(emailCell);

        const subjectCell = document.createElement("td");
        subjectCell.textContent = item.subject;
        row.appendChild(subjectCell);

        const messageCell = document.createElement("td");
        messageCell.textContent = item.message;
        row.appendChild(messageCell);

        tableBody.appendChild(row);
    });
}

// Fetch data from Firebase and populate the table
dataRef.once("value")
    .then((snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
            data.push(childSnapshot.val());
        });
        populateTable(data);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });
