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
const contactDataRef = db.ref("contacts"); // Replace with your data node path
const enquiriesDataRef = db.ref("enquiries"); // Replace with your data node path

// Function to populate the table
function populateContactTable(data) {
    const tableBody = document.getElementById("contactTableBody");

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

function populateEnquiriesTable(data) {
    const tableBody = document.getElementById("enquiriesTableBody");

    tableBody.innerHTML = "";
    data.forEach((item) => {
        const row = document.createElement("tr");

        // Create table cells and populate them with data
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = item.name;
        row.appendChild(firstNameCell);

        const companyCell = document.createElement("td");
        companyCell.textContent = item.companyName;
        row.appendChild(companyCell);

        const contactCell = document.createElement("td");
        contactCell.textContent = item.contactNo;
        row.appendChild(contactCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = item.email;
        row.appendChild(emailCell);


        const countryCell = document.createElement("td");
        countryCell.textContent = item.country;
        row.appendChild(countryCell);
        const messageCell = document.createElement("td");
        messageCell.textContent = item.message;
        row.appendChild(messageCell);

        const dateCell = document.createElement("td");
        const date = new Date(item.timestamp);
        // Get day, month, and year components in UTC
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1; // Months are zero-based, so we add 1
        const year = date.getUTCFullYear();

        const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

        dateCell.textContent = formattedDate;
        row.appendChild(dateCell);


        tableBody.appendChild(row);
    });
}

// Fetch data from Firebase and populate the table
contactDataRef.once("value")
    .then((snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
            data.push(childSnapshot.val());
        });
        populateContactTable(data);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });
enquiriesDataRef.once("value")
    .then((snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) => {
            data.push(childSnapshot.val());
        });
        populateEnquiriesTable(data);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });
