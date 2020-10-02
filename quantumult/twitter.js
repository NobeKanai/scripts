// ^https?://api\.twitter\.com/\d/timeline/home\.json

if ($request.method.toLowerCase() == 'options')
    $done();

let obj = JSON.parse($response.body);
let tweets = obj.globalObjects.tweets;

let re = new RegExp(".*ads-api\.twitter\.com.*");

Object.keys(tweets).forEach(function (key) {
    let tweet = tweets[key];
    if (tweet.source !== undefined && re.test(tweet.source)) {
        delete tweets[key];
    }
})

$done(JSON.stringify(obj));