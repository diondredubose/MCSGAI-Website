document.getElementById('signup-form').addEventListener('submit', function(event) {
    let isValid = true;

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate message
    const password = document.getElementById('password').value;
    const confirmPasword = document.getElementById('confirmPassword').value;

    const minLength = 7;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < minLength) {
        alert('Message must be at least ' + minLength + ' characters long.');
        isValid = false;
    }
    if (!specialCharPattern.test(password)) {
        alert('Message must contain at least one special character.');
        isValid = false;
    }

    if (confirmPasword.length < minLength) {
        alert('Message must be at least ' + minLength + ' characters long.');
        isValid = false;
    }
    if (!specialCharPattern.test(confirmPasword)) {
        alert('Message must contain at least one special character.');
        isValid = false;
    }

    if (password !== confirmPasword){
        alert('Passwords must match.');
        isValid = false;
    }

    // If form is not valid, prevent submission
    if (!isValid) {
        event.preventDefault();
    }
});