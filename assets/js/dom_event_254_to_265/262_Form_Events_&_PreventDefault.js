const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const userName = document.querySelectorAll('input')[0];
    // const tweet = document.querySelectorAll('input')[1];
    // console.log(userName.value, tweet.value);

    // another way to access/get element 

    const userName = tweetForm.elements.username;
    const userTweet = tweetForm.elements.tweet;
    if (userName.value != '' && userTweet.value != '') {
        addTweet(userName.value, userTweet.value);
    }

    userName.value = '';
    userTweet.value = '';


})


const addTweet = (userName, userTweet) => {

    const newTweet = document.createElement('li'); // <li></li>
    const bTag = document.createElement('b'); // <b></b>

    bTag.append(userName); // <b>userName</b>

    newTweet.append(bTag); // <li><b>userName</b></li>
    newTweet.append(`- ${userTweet}`); // <li><b>userName</b> - userTweet</li>
    tweetsContainer.append(newTweet);
}
