window.onload = function() {
    document.getElementById("top").innerText = "Welcome to the Forum";
};

let postCount = 0;

function postFunction() {
    const message = document.getElementById("message").value;
    
    if (message.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    postCount++;

    if (postCount === 1) {
        document.getElementById("topic").innerText = message;
    } else if (postCount === 2) {
        document.getElementById("reply1").innerText = message;
    } else if (postCount === 3) {
        document.getElementById("reply2").innerText = message;
    } else {
        alert("You can only post a total of 3 messages.");
    }

    document.getElementById("message").value = ""; // Clear the textarea
}

function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    document.getElementById("message").value = ""; // Clear the textarea
    postCount = 0; // Reset the post count
}
