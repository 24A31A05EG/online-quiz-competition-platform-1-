window.onload = function () {

    const form = document.getElementById("loginForm");

    if (!form) {
        console.log("Form not found");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const remember = document.getElementById("remember").checked;

        if (!username || !password) {
            showPopup("Please enter username and password", "error");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(user =>
            (user.username === username || user.email === username) &&
            user.password === password
        );

        if (!validUser) {
            showPopup("Invalid username or password", "error");
            return;
        }

        if (remember) {
            localStorage.setItem("loggedInUser", JSON.stringify(validUser));
        } else {
            sessionStorage.setItem("loggedInUser", JSON.stringify(validUser));
        }

        showPopup("Login Successful!", "success");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1500);
    });
};


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