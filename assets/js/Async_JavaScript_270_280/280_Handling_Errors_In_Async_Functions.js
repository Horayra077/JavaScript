const fakeReq = (url) =>{
    return new Promise((resolve, reject) => {
        const delay = Math.floor( Math.random() * 4500 ) + 500;
        setTimeout(() => {
            if(delay > 3000){
                reject('Connection Timeout:(');
            }else{
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay) 
    })
}


async function makeRequ() {
    try{
        let data1 = await fakeReq('/page1');
        console.log(data1);
        let data2 = await fakeReq('/page2');
        console.log(data2);
        let data3 = await fakeReq('/page3');
        console.log(data3);
    } catch(e){
        console.log('Caught an error')
        console.log('Error is: ',e)
    }
}

makeRequ();