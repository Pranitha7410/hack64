// Array of valid users with names and registration numbers
const users = [
    { name: "Alice", regdno: "REG001" },
    { name: "Bob", regdno: "REG002" },
    { name: "Charlie", regdno: "REG003" },
    { name: "David", regdno: "REG004" },
    { name: "Eve", regdno: "REG005" },
    { name: "Frank", regdno: "REG006" },
    { name: "Grace", regdno: "REG007" },
    { name: "Hannah", regdno: "REG008" },
    { name: "Ivy", regdno: "REG009" },
    { name: "Jack", regdno: "REG010" },
    { name: "Kathy", regdno: "REG011" },
    { name: "Liam", regdno: "REG012" }
];

function validateLogin() {
    const name = document.getElementById('name').value;
    const regdno = document.getElementById('regdno').value;

    // Check if the entered credentials match any user in the array
    const validUser  = users.find(user => user.name === name && user.regdno === regdno);

    if (validUser ) {
        // Redirect to the next page
        window.location.href = "interact.html"; // Change to your next page
        return false; // Prevent form submission
    } else {
        // Display error message
        document.getElementById('errorMessage').textContent = "Invalid name or registration number.";
        return false; // Prevent form submission
    }
}