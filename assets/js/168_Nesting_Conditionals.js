
const password = prompt("Enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) { // finding space in password
        console.log("Valid password")
    } else {
        console.log("Password contain space!")
    }
} else {
    console.log("Password less than 6 character")
}

