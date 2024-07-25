document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.post-tweet form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var tweetInput = form.querySelector('input[type="text"]');
        var tweetContent = tweetInput.value.trim();

        if (tweetContent.length > 0) {
            // Create a new tweet element
            var newTweet = document.createElement('div');
            newTweet.classList.add('tweets');

            newTweet.innerHTML = `
                <div class="user-pics"><img src="./img/pprofile.jpg" alt="user3.jpg"></div>
                <div class="user-content-box">
                    <div class="user-names">
                        <h1 class="full-name">Your Name</h1>
                        <p class="user-name">@yourusername</p>
                        <p class="time"> . Just now</p>
                    </div>          
                    <div class="user-content">
                        <p>${tweetContent}</p>
                    </div>
                    <div class="content-icons">
                        <i class="far fa-comment blue"> 0</i>
                        <i class="fas fa-retweet green"> 0</i>
                        <i class="far fa-heart red"> 0</i>
                        <i class="fas fa-chevron-up blue"></i>
                    </div>
                </div>
            `;

            // Append the new tweet to the tweet container
            var tweetContainer = document.querySelector('.tweet-container');
            tweetContainer.appendChild(newTweet);

            // Clear the input field after submitting the tweet
            tweetInput.value = '';
        } else {
            // If the input is empty, display an error message or handle it as needed
            console.log('Error: Tweet content is empty.');
        }
    });
});

function like(tweetId) {
    var tweet = document.getElementById(tweetId);
    var likeIcon = tweet.querySelector('.far.fa-heart');
    var likeCount = parseInt(likeIcon.textContent);
    
    if (likeIcon.classList.contains('liked')) {
        likeIcon.classList.remove('liked');
        likeCount--;
    } else {
        likeIcon.classList.add('liked');
        likeCount++;
    }
    
    likeIcon.textContent = likeCount;
}

function retweet(tweetId) {
    var tweet = document.getElementById(tweetId);
    var retweetIcon = tweet.querySelector('.fas.fa-retweet');
    var retweetCount = parseInt(retweetIcon.textContent);
    
    if (retweetIcon.classList.contains('retweeted')) {
        retweetIcon.classList.remove('retweeted');
        retweetCount--;
    } else {
        retweetIcon.classList.add('retweeted');
        retweetCount++;
    }
    
    retweetIcon.textContent = retweetCount;
}

function comment(tweetId) {
    var tweet = document.getElementById(tweetId);
    // Add your comment functionality here
}
// Function to handle like action
function like(tweetId) {
    var tweet = document.getElementById(tweetId);
    var likeIcon = tweet.querySelector('.far.fa-heart');
    var likeCount = parseInt(likeIcon.textContent);
    
    if (likeIcon.classList.contains('liked')) {
        likeIcon.classList.remove('liked');
        likeCount--;
    } else {
        likeIcon.classList.add('liked');
        likeCount++;
    }
    
    likeIcon.textContent = likeCount;
}

// Function to handle retweet action
function retweet(tweetId) {
    var tweet = document.getElementById(tweetId);
    var retweetIcon = tweet.querySelector('.fas.fa-retweet');
    var retweetCount = parseInt(retweetIcon.textContent);
    
    if (retweetIcon.classList.contains('retweeted')) {
        retweetIcon.classList.remove('retweeted');
        retweetCount--;
    } else {
        retweetIcon.classList.add('retweeted');
        retweetCount++;
    }
    
    retweetIcon.textContent = retweetCount;
}

// Function to handle comment action
function comment(tweetId) {
    var tweet = document.getElementById(tweetId);
    // Add your comment functionality here
}
