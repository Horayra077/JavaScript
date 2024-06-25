// const delay = Math.floor(Math.random() * 4500) + 500;

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
// minimum 500
// maximum 5000

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 3500) {
            failure('Connection Timeout:(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}



// fakeRequestCallback('books.com',
//     function (response) {
//         console.log("IT WORKED!!!", response)
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })



fakeRequestCallback('books.com',
    function (response) {
        console.log("IT WORKED!!!", response)
        fakeRequestCallback('books.com/page2',
            function (response) {
                console.log("IT WORKED AGAIN!!!", response)
                fakeRequestCallback('books.com/page3',
                    function (response) {
                        console.log("IT WORKED AGAIN & AGAIN (3rd req)!!!", response)
                    }, function (err) {
                        console.log("ERROR (3rd req)!!!", err)
                    })
            }, function (err) {
                console.log("ERROR (2nd req)!!!", err)
            })
    }, function (err) {
        console.log("ERROR!!!", err)
    })
