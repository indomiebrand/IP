document.addEventListener("DOMContentLoaded", async function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            // Fetch user data based on email and password
            const response = await fetch(`https://ipweb-613e.restdb.io/rest/userdatabase?q={"studentemail":"${email}","password":"${password}"}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '65d24d6fa1d7689f06030259'
                }
            });

            const data = await response.json();

            if (data.length > 0) {
                // If user exists, display login successful alert
                alert("Login successful!");
                
                // Redirect to profile page after successful login
                window.location.href = 'profile.html';
            } else {
                // If user does not exist, display invalid alert
                alert('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    });

});

