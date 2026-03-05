window.onload = function () {

    const form = document.getElementById("registerForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("terms").checked;

        if (!username || !email || !password || !confirmPassword) {
            showPopup("Please fill all fields", "error");
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            showPopup("Enter valid Gmail address", "error");
            return;
        }

        if (password.length < 6) {
            showPopup("Password must be 6+ characters", "error");
            return;
        }

        if (password !== confirmPassword) {
            showPopup("Passwords do not match", "error");
            return;
        }

        if (!terms) {
            showPopup("Please accept terms", "error");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find(user => user.email === email);

        if (userExists) {
            showPopup("Email already registered", "error");
            return;
        }

        /* Create new user with default values */
        const newUser = {
            username,
            email,
            password,
            score: 0,
            streak: 0,
            lastAttemptDate: ""
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        /* 🔥 AUTO LOGIN FIX */
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));

        showPopup("Registration Successful! Redirecting...", "success");

        setTimeout(() => {
            window.location.replace("dashboard.html");
        }, 1200);

    });
};


/* Popup Function */
function showPopup(message, type) {
    const popup = document.getElementById("popup-message");
    popup.textContent = message;
    popup.classList.add("show");

    popup.style.backgroundColor =
        type === "error" ? "#e74c3c" : "#2ecc71";

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}
