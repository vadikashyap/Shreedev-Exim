function submitForm() {
    event.preventDefault(); // Prevent the form from refreshing the page

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
    // Get form values
    const enquireForm=document.getElementById('enquiryForm')
    const name = document.getElementById('enquire_name').value;
    const companyName = document.getElementById('enquire_companyName').value;
    const contactNo = document.getElementById('enquire_companyName').value;
    const email = document.getElementById('enquire_email').value;
    const message = document.getElementById('enquire_message').value;
    const timestamp = firebase.database.ServerValue.TIMESTAMP; // Timestamp
    const countrySelect = document.getElementById("countrySelect");

    // Create a new entry in the database
    const newDataKey = database.ref('enquiries').push().key;
    const newData = {
        name: name,
        companyName:companyName,
        contactNo:contactNo,
        email: email,
        message: message,
        timestamp:timestamp,
        country:countrySelect.value
    };

    // Save the data to Firebase
    database.ref('enquiries/' + newDataKey).set(newData)
    enquireForm.reset()
    // Close the modal by triggering a click event on the close button
    const closeBtn = document.querySelector('[data-bs-dismiss="modal"]');
    closeBtn.click();
}