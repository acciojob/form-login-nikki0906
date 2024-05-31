function getFormvalue(event) {
    //Write your code here
	event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Display the first and last name using alert
    alert(firstName + ' ' + lastName);

}
document.getElementById('loginForm').addEventListener('submit', getFormvalue);
