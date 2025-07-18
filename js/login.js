
 let isSignUp = true;

        function toggleFormMode() {
            isSignUp = !isSignUp;
            document.getElementById("formTitle").innerText = isSignUp ? "Sign Up" : "Login";
            document.getElementById("submitBtn").innerText = isSignUp ? "Sign Up" : "Login";
            document.getElementById("emailField").style.display = isSignUp ? "block" : "none";
            document.getElementById("toggleText").innerHTML = isSignUp ?
                `Already have an account? <a href="#" id="toggleLink">Login</a>` :
                `Don't have an account? <a href="#" id="toggleLink">Sign Up</a>`;

            // Rebind event listener
            document.getElementById("toggleLink").addEventListener("click", function (e) {
                e.preventDefault();
                toggleFormMode();
            });
        }

        // Initial event binding
        document.getElementById("toggleLink").addEventListener("click", function (e) {
            e.preventDefault();
            toggleFormMode();
        });

        document.getElementById("submitBtn").addEventListener("click", function () {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const email = document.getElementById("email").value.trim();

            if (username === "" || password === "" || (isSignUp && email === "")) {
                alert("Please fill all the fields.");
                return;
            }

            if (isSignUp) {
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }

                const user = { username, password, email };
                localStorage.setItem("user", JSON.stringify(user));
                alert("Sign Up successful!");
            } else {
                const storedUser = JSON.parse(localStorage.getItem("user"));
                if (!storedUser) {
                    alert("No user found. Please sign up first.");
                    return;
                }

              if (username === storedUser.username && password === storedUser.password) {
    alert("Login successful!");
    window.location.href = "../index.html"; // change path if needed
} else {
                    alert("Incorrect username or password.");
                }
            }
        });
        