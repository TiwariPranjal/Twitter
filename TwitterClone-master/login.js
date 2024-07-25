document.addEventListener("DOMContentLoaded", function() {
    // Get the login button element
    var loginButton = document.getElementById("loginButton");

    // Add click event listener to the login button
    loginButton.addEventListener("click", function() {
        // Redirect to index.html
        event.preventDefault();
        window.location.href = "index.html";
    });
});
// ./html/sign.html