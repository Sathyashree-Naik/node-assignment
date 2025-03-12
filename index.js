const fs = require("fs");

// Function to return the promise
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

// function to create a file
function createFile() {
    try {
        const message = "This is a file created using fs module and async/await.";
        fs.writeFileSync("message.txt", message, "utf8");
        console.log("File created successfully!");
    } catch (error) {
        console.error("Error creating file:", error);
    }
}

createFile();
