
document.getElementById("signupBtn").addEventListener("click", function() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();

    if (username === "" || password === "" || email === "") {
        alert("Please fill all the fields.");
    } else {
        alert("Sign Up successful!");
    }
});