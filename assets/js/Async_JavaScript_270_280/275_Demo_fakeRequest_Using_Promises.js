const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 3500) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// const request = fakeRequestPromise('yelp.com/api/coffee');

// request.then(() => {
//     console.log("PROMISE RESOLVED!");
//     console.log("IT WORKED!!!!");
// }).catch(() => {
//     console.log("PROMISE REJECTED!");
//     console.log("OH NO, ERROR!!!");
// })

// OR 

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((res) => {
        console.log("IT WORKED (page 1)!!!!", res);
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then((res) => {
                console.log("IT WORKED (page 2)!!!!", res);
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then((res) => {
                        console.log("IT WORKED (page 3)!!!!", res);
                    })
                    .catch((err) => {
                        console.log("OH NO, ERROR (page 3)!!!", err);
                    })
            })
            .catch((err) => {
                console.log("OH NO, ERROR (page 2)!!!", err);
            })
    })
    .catch((err) => {
        console.log("OH NO, ERROR (page 1)!!!", err);
    })


