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
    const confirmPassword = document.getElementById('confirmPassword').value;

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

    if (confirmPassword.length < minLength) {
        alert('Message must be at least ' + minLength + ' characters long.');
        isValid = false;
    }
    if (!specialCharPattern.test(confirmPassword)) {
        alert('Message must contain at least one special character.');
        isValid = false;
    }

    if (password !== confirmPassword){
        alert('Passwords must match.');
        isValid = false;
    }

    // If form is not valid, prevent submission
    if (!isValid) {
        event.preventDefault();
    }

    if (isValid) {
        const formData = {
            email: email,
            password: password
        };

        end_point_link = 'https://your-server-endpoint.com/submit'
        fetch(end_point_link , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '../login_page/login-semantics.html';
            } else {
                alert('There was an error with your submission: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error with your submission.');
        });
    }


});