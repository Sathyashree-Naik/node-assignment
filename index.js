// Function returning a promise
function displayMessage() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

// Call the promise
displayMessage()
    .then((message) => console.log(message))
    .catch((error) => console.error("Error:", error));
