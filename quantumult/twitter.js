// ^https?://api\.twitter\.com/\d/timeline/home\.json

if ($request.method.toLowerCase() == 'options')
    $done();

let obj = JSON.parse($response.body);
let tweets = obj.globalObjects.tweets;

let re = new RegExp(".*ads-api\.twitter\.com.*");

// 计数器
let count = 0;

Object.keys(tweets).forEach(function (key) {
    let tweet = tweets[key];
    if (tweet.source !== undefined && re.test(tweet.source)) {
        delete tweets[key];
        count += 1;
    }
})

if (count !== 0) {
    console.log(`cleared twitter ads: ${count} times.`);
}
$done(JSON.stringify(obj));