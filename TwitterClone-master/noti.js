document.addEventListener("DOMContentLoaded", function() {
    // Get all reply buttons
    var replyButtons = document.querySelectorAll(".reply-btn");

    // Add click event listener to each reply button
    replyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Replace with actual functionality
            alert("Reply button clicked!");
        });
    });

    // Get all delete buttons
    var deleteButtons = document.querySelectorAll(".delete-btn");

    // Add click event listener to each delete button
    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Find the closest parent element with class "notification" and remove it
            var notification = this.closest(".notification");
            notification.remove();
        });
    });
});
