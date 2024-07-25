// 

document.addEventListener('DOMContentLoaded', function() {
    // Get the profile box and profile info elements
    var profileBox = document.getElementById('profile-box');
    var profileInfo = document.getElementById('profile-info');

    // Add a click event listener to the profile box
    profileBox.addEventListener('click', function() {
      // Toggle the visibility of profile info
      if (profileInfo.style.display === 'block') {
        profileInfo.style.display = 'none';
      } else {
        profileInfo.style.display = 'block';
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Get the tweet form
    var tweetForm = document.querySelector(".post-tweet form");

    // Get the container where tweets will be displayed
    var tweetContainer = document.querySelector(".tweet-container");

    // Add submit event listener
    tweetForm.addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the tweet input field
        var tweetInput = this.querySelector("input[type='text']");

        // Get the tweet content
        var tweetContent = tweetInput.value.trim(); // Trim any leading or trailing whitespace

        // Check if tweet content is not empty
        if (tweetContent !== "") {
            // Create a new tweet element
            var newTweet = document.createElement("div");
            newTweet.classList.add("tweet");
            newTweet.textContent = tweetContent;

            // Prepend the new tweet to the tweet container
            tweetContainer.prepend(newTweet);

            // Optional: Clear the tweet input field after submission
            tweetInput.value = "";
        } else {
            // If tweet content is empty, display an alert or handle it appropriately
            alert("Please enter something to tweet.");
        }
    });
});
