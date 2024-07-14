document.getElementById('LoginForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('password').value;
    const minLength = 7;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (message.length < minLength) {
        alert('Message must be at least ' + minLength + ' characters long.');
        isValid = false;
    }
    if (!specialCharPattern.test(message)) {
        alert('Message must contain at least one special character.');
        isValid = false;
    }

    // If form is not valid, prevent submission
    if (!isValid) {
        event.preventDefault();
    }
});