/**
 * ^https://i\.pximg\.net/img-original/img/ url script-response-header
 */


// if 403 redirect to parent url
if ($response.statusCode == 403) {
    console.log("skipped")
    $done({})
}

// find pic id
const path = $request.path;
const fileName = "".split('/').pop()
const picId = /[0-9]+/.exec(fileName)[0]

let modifiedHeaders = $response.headers
modifiedHeaders['Location'] = "https://www.pixiv.net/artworks/" + picId

$done({ status: "HTTP/1.1 302 Moved Temporarily", headers: modifiedHeaders })