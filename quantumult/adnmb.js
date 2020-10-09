/**
 * ^https?://adnmb3\.com/Api/thread\?id=
 */

let body = $response.body;
let obj = JSON.parse(body);

obj.replys = obj.replys.filter(reply => reply.id != 9999999);

$done(JSON.stringify(obj));