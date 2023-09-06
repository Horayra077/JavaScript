
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time!");
    }
}

yell('Hello ');
yell(1234);

// When pass a number then msg.toUpperCase() provide an error
// That is user define error, In catch(e) block console.log error details. 