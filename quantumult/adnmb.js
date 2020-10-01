/*
^https?://adnmb3.com/Api/thread\?id= url script-response-body https://raw.githubusercontent.com/NobeKanai/scripts/master/quantumult/adnmb.js
*/

let body = $response.body;
let obj = JSON.parse(body);

let replys = obj.replys.filter(reply => reply.id != 9999999);

obj.replys = replys;
console.log(obj);
$done({
    body: JSON.stringify(obj)
});